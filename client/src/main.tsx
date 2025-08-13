import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/variables.module.css'
import { router  } from './routes/routes.tsx'
import { RouterProvider } from "react-router-dom";
import React from 'react'

createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
