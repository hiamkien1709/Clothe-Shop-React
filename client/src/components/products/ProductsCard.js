import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import ProductForm from "./ProductForm";

const ProductsCard = ({ product }) => {
  const [openProduct, setOpenProduct] = useState(false);

  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete this item ?")) {
      axios.delete(`products/${id}`, product).then((res) => console.log(res));
    }
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.image} />

      <div className="box">
        <h3>
          <Link className="title" to={`/products/${product._id}`}>
            <span />
            {product.title}
          </Link>
        </h3>
        <h4>${product.price}</h4>

        <div className="btn_div">
          <button className="btn_edit" onClick={() => setOpenProduct(true)}>
            Edit
          </button>

          <button
            className="btn_delete"
            onClick={() => handleDelete(product._id)}
          >
            Delete
          </button>
        </div>
        {openProduct && (
          <Modal titleTxt="Create Product" setOpen={setOpenProduct}>
            <ProductForm btnTxt="update" data={product} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ProductsCard;
