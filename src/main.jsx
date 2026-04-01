import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// git remote add origin https://github.com/your-username/your-repo.git
// git branch -M main               # rename branch to main
// git push -u origin main          # push and set upstream

// echo "# fdsf" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Ammar-Sagheer/fdsf.git
// git push -u origin main
