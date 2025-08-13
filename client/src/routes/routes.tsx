import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout/AuthLayout.tsx";
import { SignIn } from "../pages/SignIn/SignIn.tsx"
import { SignUp } from "../pages/SignUp/SignUp.tsx"
import { ExpensesLayout } from "../layouts/ExpensesLayout/ExpensesLayout.tsx";
import { Expenses } from "../pages/expenses";

export const router = createBrowserRouter([
    {
        Component: AuthLayout,
        children: [
            { path: 'auth/sign-up', element: <SignUp /> },
            { path: 'auth/sign-in', element: <SignIn /> }
        ]
    },
    {
        Component: ExpensesLayout,
        children: [
            { path: "/", element: <Expenses /> },
        ]
    },
]);