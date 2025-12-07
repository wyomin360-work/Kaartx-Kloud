import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Force scroll to top before React renders
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

createRoot(document.getElementById("root")!).render(<App />);

// Also scroll after initial render
requestAnimationFrame(() => {
  window.scrollTo(0, 0);
});
