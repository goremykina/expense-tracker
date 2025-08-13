import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

export const ExpensesLayout = () => {
    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
        </div>
    );
};