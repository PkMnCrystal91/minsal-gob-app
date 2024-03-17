import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useInventoryStore } from "../../hooks/useInventoryStore";

import "./Form.css";

const productFormFields = {
  name: "",
  price: 0.0,
  stock: 0,
};

export const Form = () => {
  const { postProduct } = useInventoryStore();
  const {
    name,
    price,
    stock,
    onInputChange: onLoginInputChange,
  } = useForm(productFormFields);
  const navigate = useNavigate();

  const onPostProduct = (event) => {
    event.preventDefault();
    postProduct({ name, price, stock });
    navigate("/");
  };

  return (
    <form
      onSubmit={onPostProduct}
      className="bg-light w-25 row justify-content-center p-3 gap-1"
    >
      <div className="col-12 d-flex flex-column">
        <label>Name</label>
        <input
          name="name"
          value={name}
          onChange={onLoginInputChange}
          className="px-3"
          type="text"
        />
      </div>
      <div className="col-12 d-flex flex-column">
        <label>Price</label>
        <input
          name="price"
          value={price}
          onChange={onLoginInputChange}
          className="px-3"
          type="text"
        />
      </div>
      <div className="col-12 d-flex flex-column">
        <label>In Stock</label>
        <input
          name="stock"
          value={stock}
          onChange={onLoginInputChange}
          className="px-3"
          type="text"
        />
      </div>
      <div className="col-12 d-flex flex-column gap-2 mt-2">
        <button className="btn btn-primary ">Enter</button>
        <button className="btn btn-danger">Cancel</button>
      </div>
    </form>
  );
};
