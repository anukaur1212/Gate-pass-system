import { useState } from "react";
import Header from "./Admin/component/Header";
import Sidebar from "./Admin/component/Sidebar";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import LogoutModal from "./Share/Report/Modal/LogoutModal";


const Layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showLogout, setShowLogout] = useState(false);

    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear authentication
        localStorage.removeItem("isLoggedIn");

        setShowLogout(false);

        // Replace dashboard history with login
        navigate("/login", { replace: true });
    };

    return (
        <div className=" min-h-screen bg-slate-50">
            <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen}
                setShowLogout={setShowLogout}
            />

            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <main>
                <Outlet />
            </main>

            <LogoutModal
                isOpen={showLogout}
                onClose={() => setShowLogout(false)}
                onConfirm={handleLogout}
            />

        </div >


    );
}

export default Layout;

