import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

const isPageRefresh = sessionStorage.getItem('isPageLoaded') === 'true';
sessionStorage.setItem('isPageLoaded', 'true');

if (isPageRefresh) {
  document.documentElement.style.overflow = 'hidden';
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

createRoot(document.getElementById("root")!).render(<App />);

if (isPageRefresh) {
  requestAnimationFrame(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.style.overflow = '';
    }, 50);
  });
}

window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});
