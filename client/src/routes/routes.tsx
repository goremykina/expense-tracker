import { createBrowserRouter } from "react-router-dom";
import { Expenses } from "../pages/expenses";

export const router = createBrowserRouter([
    { path: "/", element: <Expenses /> },
]);