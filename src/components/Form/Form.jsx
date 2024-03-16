import "./Form.css";

export const Form = () => {
  return (
    <form className="bg-light w-25 row justify-content-center p-3 gap-1">
      <div className="col-12 d-flex flex-column">
        <label>Name</label>
        <input className="px-3" type="text" id="id" name="id" />
      </div>
      <div className="col-12 d-flex flex-column">
        <label>Price</label>
        <input className="px-3" type="text" id="id" name="id" />
      </div>
      <div className="col-12 d-flex flex-column">
        <label>In Stock</label>
        <input className="px-3" type="text" id="id" name="id" />
      </div>
      <div className="col-12 d-flex flex-column gap-2 mt-2">
        <button className="btn btn-primary ">Enter</button>
        <button className="btn btn-danger">Cancel</button>
      </div>
    </form>
  );
};
