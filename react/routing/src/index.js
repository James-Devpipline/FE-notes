import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./componenets/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// for vscode
// npm i react-router-dom@5
// npm i --save-dev sass
