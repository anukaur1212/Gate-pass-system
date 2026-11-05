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
// import EmployeeOfficalForm from './Share/Employee/EmployeeOfficalForm';



const App = () => {
  return (
    <>

      <Routes>

        <Route path='/login' element={<Login/>}/>


        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="/productform" element={<ProductForm />} />
          <Route path='/report' element={<Report />} />
          <Route path='/approval' element={<Approval />} />
          <Route path='/visitor' element={<VisitorEntry />} />
          <Route path='/visitorform' element={<VisitorForm />} />
          <Route path='/employee' element={<Employee />} />
          <Route path='/employeeform' element={<EmployeeForm/>} />
          {/* <Route path='/officialform' element={<EmployeeOfficalForm/>}/> */}
        </Route>

      </Routes>

    </>
  )
}

export default App

// text-var(--blur-color)