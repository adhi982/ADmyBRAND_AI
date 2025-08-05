// This script runs immediately when included in the page
// It helps prevent the initial flash of light theme content before React hydrates

(function() {
  // Check for existing theme preference
  const storedTheme = localStorage.getItem('admybrand-ui-theme');
  
  // If no stored preference, set dark mode as default
  if (!storedTheme) {
    localStorage.setItem('admybrand-ui-theme', 'dark');
    document.documentElement.classList.add('dark');
  } else {
    // Otherwise apply the stored preference
    document.documentElement.classList.add(storedTheme);
  }
})();

export {};  // Makes TypeScript treat this as a module
