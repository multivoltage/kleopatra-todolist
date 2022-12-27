import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    // remember that react 18.x with strict mode mount and unmount component 2 times
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
