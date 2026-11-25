import React from 'react'
import { Route, Routes } from 'react-router-dom';
import DashboardPage from './Admin/pages/DashBoardPage';
import ProductForm from './Admin/component/ProductFrom';
import Report from './Admin/pages/Report';
import Approval from './Admin/pages/Approval'
import VisitorEntry from './Admin/pages/VisitorEntry';
import VisitorForm from './Share/VisitorEntry/VisitorForm';
import Layout from './Layout';
import Employee from './Admin/pages/Employee';
import EmployeeForm from './Share/Employee/Form/EmployeeForm';
import Login from './Admin/pages/Login';
import NewJoiny from './Admin/pages/NewJoiny';
import DeleteVisitor from './Share/Report/Modal/DeleteVisitor';
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CloudImg from '../CloudImg';
import CloudGetImg from './CloudGetImg';


const App = () => {
  return (
    <>

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="/productform" element={<ProductForm />} />
          <Route path='/report' element={<Report />} />
          <Route path='/approval' element={<Approval />} />
          <Route path='/visitor' element={<VisitorEntry />} />
          <Route path='/visitorform' element={<VisitorForm />} />
          <Route path='/employee' element={<Employee />} />
          <Route path='/employeeform' element={<EmployeeForm />} />
          <Route path='/newjoiny' element={<NewJoiny />} />
          <Route path='/deletevisitor' element={<DeleteVisitor/>}/>
        </Route>
      </Routes>

      {/* <CloudImg/> */}
      {/* <Routes>
        <Route path="/" element={<CloudImg />} />
        <Route path="/preview" element={<CloudGetImg />} />
      </Routes> */}

      <ToastContainer />
    </>
  )
}

export default App
