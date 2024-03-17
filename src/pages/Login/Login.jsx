import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { useAuthStore } from "../../hooks/useAuthStore";

import "./Login.css";

const loginFormFields = {
  loginEmail: "",
  loginPassword: "",
};

export const Login = () => {
  const { startLogin, erroMessage } = useAuthStore();
  const {
    loginEmail,
    loginPassword,
    onInputChange: onLoginInputChange,
  } = useForm(loginFormFields);

  const loginSubmit = (event) => {
    event.preventDefault();
    startLogin({ email: loginEmail, password: loginPassword });
  };

  return (
    <div className="container-fluid main-app d-flex justify-content-center align-items-center">
      <div className="container login-container px-5 row justify-content-center">
        <div className="col-lg-5 d-flex align-items-center">
          <h1 className="text-white display-5">
            <strong>This is an Application for my Fucking Goberment</strong>
          </h1>
        </div>
        <div className="col-md-0 col-lg-2"></div>
        <div className="col-lg-5 bg-light box-2">
          <form onSubmit={loginSubmit} className="row p-2">
            <label className="col-12 mt-2 px-0">Email</label>
            <input
              name="loginEmail"
              value={loginEmail}
              onChange={onLoginInputChange}
              className="col-12 mt-2"
              type="text"
            />
            <label className="col-12 mt-2 px-0">Password</label>
            <input
              type="password"
              name="loginPassword"
              value={loginPassword}
              onChange={onLoginInputChange}
              className="col-12 mt-2"
            />
            <button className="btn btn-secondary col-10 my-3 mx-auto">
              Let's login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
