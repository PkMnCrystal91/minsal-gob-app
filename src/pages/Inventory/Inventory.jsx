import { Navbar, Tbody, Thead } from "../../components/index";
import "./Inventory.css";

export const Inventory = () => {
  return (
    <div className="container-fluid main-inventory">
      <Navbar />
      <button type="button" className="btn btn-success">
        New item
      </button>
      <div className="input-box w-50 m-auto mt-5">
        <input
          className="w-100 m-auto px-3"
          type="text"
          placeholder="Search item by name"
          name=""
        />
      </div>
      <table className="table table-hover bg-primary w-75 m-auto mt-3">
        <Thead />
        <Tbody />
      </table>
    </div>
  );
};
