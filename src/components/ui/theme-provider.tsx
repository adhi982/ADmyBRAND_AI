import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "dark", // Changed from "system" to "dark" for initial load
  storageKey = "admybrand-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if there's a stored theme preference
    const storedTheme = localStorage.getItem(storageKey) as Theme | null;
    // If there's no stored preference, use the default (which will be "dark")
    return storedTheme || defaultTheme;
  });

  // This effect runs when the theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    
    root.classList.remove("light", "dark");
    
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      
      root.classList.add(systemTheme);
      return;
    }
    
    root.classList.add(theme);
  }, [theme]);
  
  // Special first-time initialization effect
  useEffect(() => {
    // If this is the first visit (no theme in localStorage)
    if (!localStorage.getItem(storageKey)) {
      // Set dark mode as the initial theme
      localStorage.setItem(storageKey, "dark");
    }
  }, [storageKey]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      // Persist the theme choice in localStorage
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
      
      // Log for debugging (will be removed in production)
      console.log(`Theme changed to: ${theme}`);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
