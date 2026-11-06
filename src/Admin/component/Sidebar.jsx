import { NavLink } from "react-router-dom";
import { LogOut, ShieldCheck } from "lucide-react";
import { sidebar } from "../../Share/Constant/NavbarList";
import "/src/App.css";
import { useContext, useState } from "react";
import { Admin } from "../../main";

const Sidebar = ({ menuOpen, setMenuOpen,setShowLogout }) => {

 const {AdminName,png,setAdminName} = useContext(Admin);

  return (
    <>
      <div className={`sidebar ${menuOpen ? "mobile-open" : "mobile-close"}`}>

        {/* Logo */}
        <div>
          <div className="sidebar-logo">
            <div className="logo-icon">
              <ShieldCheck size={28} />
            </div>

            <div className="sidebar-text">
              <h4>PassFlow</h4>
              <p>GATE PASS SYSTEM</p>
            </div>
          </div>

          {/* Navigation */}
          <ul className="sidebar-menu">
            {sidebar.map((item) => (
              <li key={item.name} className="relative">
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className="navbutton"
                  onClick={() => setMenuOpen(false)}>
                  <item.logo
                    size={20}
                    className="sidebar-menu-icons"
                  />
                  <span className="sidebar-text">{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Section */}
        <div className="sidebar-bottom">
          <div className="user-profile">
            <div className="cursor-pointer hover:scale-110 transition">
              <img src={png} alt="avatar" className="rounded-full h-10 w-10"/>
            </div>

            <div className="sidebar-text">
              <p>Administrator</p>
              <small>{AdminName}</small>
            </div>
          </div>

            <button onClick={()=>setShowLogout(true)} 
            className="logout">
              <LogOut size={20} />
              <span className="sidebar-text">Logout</span>
            </button>

        </div>
      </div>

    </>
  );
};

export default Sidebar;




