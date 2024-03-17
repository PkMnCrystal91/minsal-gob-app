import { useDispatch, useSelector } from "react-redux";
import inventoryApi from "../api/inventoryApi";
import { addProduct, deleteProduct } from "../store/intentory/inventorySlice";

export const useInventoryStore = () => {
  const product = useSelector((state) => state.inventory);
  const dispatch = useDispatch();

  const postProduct = async ({ name, price, stock }) => {
    try {
      const { data } = await inventoryApi.post("/product", {
        name,
        price,
        stock,
      });
      console.log(data);
      dispatch(addProduct({ name: name, price: price, stock: stock }));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    //Propiedades
    product,

    // Funciones
    postProduct,
  };
};
