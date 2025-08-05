import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Spotlight } from "@/components/ui/spotlight";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative">
      {/* Full-page spotlight effect */}
      <Spotlight
        className="from-purple-400/30 via-purple-500/20 to-purple-600/10 dark:from-purple-300/40 dark:via-purple-400/30 dark:to-purple-500/20"
        size={300}
      />
      
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Oops! Page not found</p>
        <a href="/" className="text-primary hover:text-primary/80 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
