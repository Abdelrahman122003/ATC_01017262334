// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// All pages in Application
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AdminDashboard from "./pages/AdminDashboard";
import Create from "./pages/Create";
import UserDashboard from "./pages/UserDashboard";
import NotFound from "./pages/NotFound";
import Edit from "./pages/Edit";
import Congratulations from "./pages/Congratulations";

// Style Sheets
import "./css/style.css";
import "./css/navBarUA.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* General page */}
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          {/* Admin Pages */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/dashboard/create" element={<Create />} />
          <Route path="/admin/dashboard/edit" element={<Edit />} />
          {/* <Route path="home/admin/" element={<UserDashboard />} /> */}
          {/* User Pages */}
          <Route path="user/dashboard" element={<UserDashboard />} />
          {/* <Route path="user/booked-event" element={<CongratePage />} /> */}
          <Route path="/cong" element={<Congratulations />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}
// function App() {
//   return (
//     <>
//       {/* <Login></Login> */}
//       {/* <HomePage></HomePage> */}
//       {/* <SignUp></SignUp> */}
//       {/* <UserDashboard></UserDashboard> */}
//       <Admin></Admin>
//       {/* <Create></Create> */}
//       <ToastContainer />;
//     </>
//   );
// }

export default App;
