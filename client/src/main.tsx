import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/variables.module.css'
import React from 'react'
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
