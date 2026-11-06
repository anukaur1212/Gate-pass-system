import { StrictMode, React, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { createContext } from 'react'

export const Admin = createContext();

const Main = () => {
  const [AdminName, setAdminName] = useState("Jatin")
  const png = "src/assets/img/avatar-5.jpg";

  return (
    <Admin.Provider value={{ AdminName, png,setAdminName }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Admin.Provider>
  )
}

createRoot(document.getElementById('root')).render(
  <Main />
)
