import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// Import the theme initialization script to run before React renders
import './lib/theme-init'

createRoot(document.getElementById("root")!).render(<App />);
