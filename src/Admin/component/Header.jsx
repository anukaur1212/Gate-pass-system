import { Bell, CalendarDays, Menu, ShieldCheck, UserRound, X } from "lucide-react";
import "/src/App.css";
import { NavLink } from "react-router-dom";

const Header = ({ menuOpen, setMenuOpen }) => {


  return (
    <div className="header">
      <div className="header-left">

        {/* Welcome Section */}
        <div className="welcome">

          <h1>
            Welcome to Dashboard
            <span>👋</span>
          </h1>
          <p>
            Manage your RGP, NRGP requests and approvals.
          </p>
        </div>

        {/* Right Section */}
        <div className="header-right">

          {/* Date */}
          <div className="date">

            <div className="calendar">
              <CalendarDays size={19} />
            </div>

            <span className="date-style">
              {new Date().toLocaleDateString("en-IN", {
                dateStyle: "full"
              })}
            </span>
          </div>

          {/* Mobile Menu */}
          {/* <div className=""> */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle sidebar"
            className="lg:hidden"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>

          {/* notification */}
          <button
            aria-label="Notifications"
            className="notification-btn">

            <Bell size={23}
              className=".bell-icon" />
            <span />
          </button>

          {/* Notifications */}
          <div className="lg:hidden fixed right-3 flex gap-5">
            <button
              aria-label="Notifications"
              className="relative rounded-xl border border-green-800/10
            bg-white p-3 text-green-800 shadow-sm transition-all duration-300
            hover:-translate-y-1 hover:bg-green-700/20 hover:text-green-800 
            hover:shadow-lg active:scale-95">

              <Bell size={23}
                className="transition-transform duration-300 group-hover:rotate-12" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
            </button>


            <div className="lg:hidden rounded-xl bg-success/30 p-2.5 text-green-300 flex">
              <ShieldCheck size={28} color="green" />
            </div>
          </div>
          {/* </div> */}


          {/* Profile */}
          <div className="profile">

            <div className="profile-icon">

              <div className="user-icon">
                <UserRound size={22} />
              </div>
            </div>

            <div>
              <p className="user-heading">
                Admin
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}


export default Header
