import "./Login.css";

export const Login = () => {
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
          <form className="row p-2">
            <label className="col-12 mt-2 px-0">Email</label>
            <input className="col-12 mt-2" type="text" />
            <label className="col-12 mt-2 px-0">Password</label>
            <input className="col-12 mt-2" />
            <button className="btn btn-secondary col-10 my-3 mx-auto">
              Let's login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
