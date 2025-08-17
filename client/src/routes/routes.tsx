import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
import { ExpensesLayout } from "../layouts/ExpensesLayout/ExpensesLayout.tsx";
import { Expenses } from "../pages/Expenses";
import { SignUp } from "../pages/Auth/SignUp";

export const router = createBrowserRouter([
    {
        Component: AuthLayout,
        children: [
            { path: 'auth/sign-up', element: <SignUp /> },
        ]
    },
    {
        Component: ExpensesLayout,
        children: [
            { path: "/", element: <Expenses /> },
        ]
    },
]);