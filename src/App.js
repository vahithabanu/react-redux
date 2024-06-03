import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './features/products/productsAPI';
import { setProducts } from './features/products/productsSlice';
import ProductCard from './components/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetchProducts().then(data => {
      dispatch(setProducts(data));
    });
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="row">
        <div className="col">
          <h4>Total Quantity: {cart.totalQuantity}</h4>
          <h4>Total Amount: ${cart.totalAmount.toFixed(2)}</h4>
        </div>
      </div>
    </div>
  );
};

export default App;
