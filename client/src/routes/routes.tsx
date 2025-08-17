import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
import { SignIn } from "../pages/Auth/SignIn"
import { ExpensesLayout } from "../layouts/ExpensesLayout/ExpensesLayout.tsx";
import { Expenses } from "../pages/Expenses";
import { SignUp } from "../pages/Auth/SignUp";
import { ForgotPassword } from "../pages/Auth/ForgotPassword";
import { ResetCode } from "../pages/Auth/ResetCode";
import { RestorePassword } from "../pages/Auth/RestorePassword";
import { Success } from "../pages/Auth/Success";

export const router = createBrowserRouter([
    {
        Component: AuthLayout,
        children: [
            { path: 'auth/sign-up', element: <SignUp /> },
            { path: 'auth/sign-in', element: <SignIn /> },
            { path: 'auth/forgot-password', element: <ForgotPassword /> },
            { path: 'auth/reset-code', element: <ResetCode /> },
            { path: 'auth/restore-password', element: <RestorePassword /> },
            { path: 'auth/success', element: <Success /> }
        ]
    },
    {
        Component: ExpensesLayout,
        children: [
            { path: "/", element: <Expenses /> },
        ]
    },
]);