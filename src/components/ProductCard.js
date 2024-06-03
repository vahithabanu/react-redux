import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../features/cart/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const priceAfterDiscount = (product.price - (product.price * (product.discountPercentage / 100))).toFixed(2);

  return (
    <div className="col-12 d-flex justify-content-center align-items-center" style={{background:'sea blue'}}>
      <div className="card mb-3" style={{ width: "80%", borderRadius: "20px" }}>
        <div className="row g-0">
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            <img
              src={product.image}
              className="img-fluid product-img"
              alt={product.name}
              style={{ borderRadius: "30px" }}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <h5 className="card-title d-flex justify-content-end">Price:${product.price}</h5>
              <p className="card-text"><b>Brand: </b>{product.brand}</p>
              <p className="card-text text-success">Discount Offer: {product.discountPercentage}%</p>
              <p className="card-text text-danger">In Stock: {product.stock}</p>
              <h5 className="review-stat">Rating: {product.rating}</h5>
              <div>
                <button className="btn btn-secondary" onClick={() => dispatch(removeItem(product))}>-</button>
                <span> {product.quantity || 0} </span>
                <button className="btn btn-secondary" onClick={() => dispatch(addItem({...product, priceAfterDiscount}))}>+</button>
              </div>
              <div className="card-title col text-end fs-4 fw-normal">
                Sub-Total: ${product.subTotal || 0}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
