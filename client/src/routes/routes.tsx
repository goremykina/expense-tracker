import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout/AuthLayout.tsx";
import { SignIn } from "../pages/SignIn/SignIn.tsx"
import { SignUp } from "../pages/SignUp/SignUp.tsx"

export const router = createBrowserRouter([
    {
        Component: AuthLayout,
        children: [
            { path: 'auth/sign-up', element: <SignUp /> },
            { path: 'auth/sign-in', element: <SignIn /> }
        ]
    }
]);