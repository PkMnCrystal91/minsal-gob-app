import React from "react";
import { Login } from "./pages/Login/Login";
import "./App.css";

export const App = () => {
  return (
    <div className="container-fluid main-app d-flex justify-content-center align-items-center">
      <Login />
    </div>
  );
};
