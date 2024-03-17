import { useAuthStore } from "../hooks/useAuthStore";
import { Navigate, Route, Routes } from "react-router-dom";
import { FormContainer, Inventory, Login } from "../pages";

export const AppRouter = () => {
  const { status, user } = useAuthStore();

  if (status === "checking") {
    return <h3>Cargando...</h3>;
  }

  return (
    <>
      <Routes>
        {user.token ? (
          <>
            <Route path="/" element={<Inventory />} />
            <Route path="/form" element={<FormContainer />}>
              <Route path="/form/:id" element={<FormContainer />} />
            </Route>
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </>
  );
};
