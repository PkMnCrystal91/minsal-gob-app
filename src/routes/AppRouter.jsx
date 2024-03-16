import { Navigate, Route, Routes } from "react-router-dom";
import { FormContainer, Inventory, Login } from "../pages";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/inventori" element={<Inventory />} />
        <Route path="/form" element={<FormContainer />}>
          <Route path="/form/:id" element={<FormContainer />} />
        </Route>
      </Routes>
    </>
  );
};
