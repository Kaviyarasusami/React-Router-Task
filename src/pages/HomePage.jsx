import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/Productcard';


const HomePage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products', error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
      {products.map((product) => (
        
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default HomePage;
