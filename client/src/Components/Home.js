import React from 'react'
import { Routes, Route } from "react-router-dom";
import AdminDashboard from './Private_Routes/Admin/Dashboard';
import ClientDashboard from './Private_Routes/Client/Dashboard';
import SellerDashboard from './Private_Routes/Seller/Dashboard';


const Home = () => {
  return (
    <div>
      <Routes>
      <Route path='/admin_dashboard' element={<AdminDashboard/>}/>
      <Route path='/client_dashboard' element={<ClientDashboard/>}/>
      <Route path='/seller_dashboard' element={<SellerDashboard/>}/>
      </Routes>
    </div>
  )
}

export default Home