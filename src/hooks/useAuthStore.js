import { useDispatch, useSelector } from "react-redux";
import loginApi from "../api/loginApi";
import {
  clearErrorMessage,
  onChecking,
  onLogin,
  onLogout,
} from "../store/auth/authSlice";

export const useAuthStore = () => {
  const { status, user, erroMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await loginApi.post("/login", { email, password });
      console.log({ email, password, data });
      localStorage.setItem("token", data.token);
      dispatch(
        onLogin({ email: email, password: password, token: data.token })
      );
    } catch (error) {
      dispatch(onLogout("Invalid Credentials"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  return {
    // Propiedades
    status,
    user,
    erroMessage,

    // Funciones
    startLogin,
    startLogout,
  };
};
