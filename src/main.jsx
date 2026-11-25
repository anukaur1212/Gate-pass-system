import { StrictMode, React, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { createContext } from 'react'
import png from '/src/assets/img/avatar-5.jpg';

export const Admin = createContext();

const Main = () => {

  const [AdminName, setAdminName] = useState("Jatin")

    const [formData, setFormData] = useState({
      email: "",
      password: "",
      remember: false,
    });

localStorage.setItem("loggedInUser",formData.email);

const user = localStorage.getItem("loggedInUser") ;

const firstName = user?.split("@")[0]?.split(".")[0] || "Admin";

  return (
    <Admin.Provider value={{ AdminName, png,setAdminName,formData,setFormData,firstName}}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Admin.Provider>
  )
}

createRoot(document.getElementById('root')).render(
  <Main />
)
