import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserHome from "./components/UserHome";
import UserCreate from "./components/UserCreate";
import UserEdit from "./components/UserEdit";
import UserDetails from "./components/UserDetails";
// import UseStateHook from "./UseStatteHook";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/create" element={<UserCreate />} />
          <Route path="/edit/:userid" element={<UserEdit />} />
          <Route path="/details/:userid" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
