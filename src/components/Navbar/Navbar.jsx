import { useAuthStore } from "../../hooks/useAuthStore";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const { startLogout, user } = useAuthStore();
  const navigate = useNavigate();

  const onLogout = () => {
    startLogout();
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="container main-bar bg-light d-flex justify-content-end px-5">
      <div className="nav-options d-flex align-items-center justify-content-between w-25">
        <p>{user.email}</p>
        <div className="line"></div>
        <button onClick={onLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
};
