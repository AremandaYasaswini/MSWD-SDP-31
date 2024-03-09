import React from 'react';
import './files/Product.css';
import { useNavigate } from 'react-router-dom';
import p1 from './Images/p1.jpg'; 
import p2 from './Images/p2.jpg'; 
import p3 from './Images/p3.jpg'; 
import p4 from './Images/p4.jpg';
import p5 from './Images/p5.jpg';
import p6 from './Images/p6.jpg';
import p7 from './Images/p7.jpg';
import p8 from './Images/p8.jpg';
import p9 from './Images/p9.jpg';
import p10 from './Images/p10.jpg';
import p11 from './Images/p11.jpg';
import p12 from './Images/p12.jpg';
import p13 from './Images/p13.jpg';
import p14 from './Images/p14.jpg';
import p15 from './Images/p15.jpg';
import p16 from './Images/p16.jpg';
import p17 from './Images/p17.jpg';
import p18 from './Images/p18.jpg';
import p19 from './Images/p19.jpg';
import p20 from './Images/p20.jpg';
import p21 from './Images/p21.jpg';
import p22 from './Images/p22.jpg';
import p23 from './Images/p23.jpg';
import p24 from './Images/p24.jpg';
import p25 from './Images/p25.jpg';
import p26 from './Images/p26.jpg';
import p27 from './Images/p27.jpg';
import p28 from './Images/p28.jpg';
import p29 from './Images/p29.jpg';
import p30 from './Images/p30.jpg';
import p31 from './Images/p31.jpg';
import p32 from './Images/p32.jpg';
import p33 from './Images/p33.jpg';
import p34 from './Images/p34.jpg';
import p35 from './Images/p35.jpg';
import p36 from './Images/p36.jpg';
import p37 from './Images/p37.jpg';
import p38 from './Images/p38.jpg';
import p39 from './Images/p39.jpg';
import p40 from './Images/p40.jpg';
import p41 from './Images/p41.jpg';
import p42 from './Images/p42.jpg';
import p43 from './Images/p43.jpg';
import p44 from './Images/p44.jpg';
import p45 from './Images/p45.jpg';
import p46 from './Images/p46.jpg';
import p47 from './Images/p47.jpg';
import p48 from './Images/p48.jpg';
import p49 from './Images/p49.jpg';
import p50 from './Images/p50.jpg';

const Products = ({ addToCart }) => {
  const navigate = useNavigate();

  const handleBuyNow = (productId) => {
    navigate('/checkout', { state: { productId } });
  };
  
  
  

  const productsData = [
    { id: 1, name: 'Product 1', price: '$20', image: p1 },
    { id: 2, name: 'Product 2', price: '$30', image: p2 },
    { id: 3, name: 'Product 3', price: '$25', image: p3 },
    { id: 4, name: 'Product 4', price: '$25', image: p4 },
    { id: 5, name: 'Product 5', price: '$25', image: p5 },
    { id: 6, name: 'Product 6', price: '$25', image: p6 },
    { id: 7, name: 'Product 7', price: '$25', image: p7 },
    { id: 8, name: 'Product 8', price: '$25', image: p8 },
    { id: 9, name: 'Product 9', price: '$25', image: p9 },
    { id: 10, name: 'Product 10', price: '$25', image: p10 },
    { id: 11, name: 'Product 11', price: '$25', image: p11 },
    { id: 12, name: 'Product 12', price: '$25', image: p12 },
    { id: 13, name: 'Product 13', price: '$25', image: p13 },
    { id: 14, name: 'Product 14', price: '$25', image: p14 },
    { id: 15, name: 'Product 15', price: '$25', image: p15 },
    { id: 16, name: 'Product 16', price: '$25', image: p16 },
    { id: 17, name: 'Product 17', price: '$25', image: p17 },
    { id: 18, name: 'Product 18', price: '$25', image: p18 },
    { id: 19, name: 'Product 19', price: '$25', image: p19 },
    { id: 20, name: 'Product 20', price: '$25', image: p20 },
    { id: 21, name: 'Product 21', price: '$25', image: p21 },
    { id: 22, name: 'Product 22', price: '$25', image: p22 },
    { id: 23, name: 'Product 23', price: '$25', image: p23 },
    { id: 24, name: 'Product 24', price: '$25', image: p24 },
    { id: 25, name: 'Product 25', price: '$25', image: p25 },
    { id: 26, name: 'Product 26', price: '$25', image: p26 },
    { id: 27, name: 'Product 27', price: '$25', image: p27 },
    { id: 28, name: 'Product 28', price: '$25', image: p28 },
    { id: 29, name: 'Product 29', price: '$25', image: p29 },
    { id: 30, name: 'Product 30', price: '$25', image: p30 },
    { id: 31, name: 'Product 31', price: '$25', image: p31 },
    { id: 32, name: 'Product 32', price: '$25', image: p32 },
    { id: 33, name: 'Product 33', price: '$25', image: p33 },
    { id: 34, name: 'Product 34', price: '$25', image: p34 },
    { id: 35, name: 'Product 35', price: '$25', image: p35 },
    { id: 36, name: 'Product 36', price: '$25', image: p36 },
    { id: 37, name: 'Product 37', price: '$25', image: p37 },
    { id: 38, name: 'Product 38', price: '$25', image: p38 },
    { id: 39, name: 'Product 39', price: '$25', image: p39 },
    { id: 40, name: 'Product 40', price: '$25', image: p40 },
    { id: 41, name: 'Product 41', price: '$25', image: p41 },
    { id: 42, name: 'Product 42', price: '$25', image: p42 },
    { id: 43, name: 'Product 43', price: '$25', image: p43 },
    { id: 44, name: 'Product 44', price: '$25', image: p44 },
    { id: 45, name: 'Product 45', price: '$25', image: p45 },
    { id: 46, name: 'Product 46', price: '$25', image: p46 },
    { id: 47, name: 'Product 47', price: '$25', image: p47 },
    { id: 48, name: 'Product 48', price: '$25', image: p48 },
    { id: 49, name: 'Product 49', price: '$25', image: p49 },
    { id: 50, name: 'Product 50', price: '$25', image: p50 }


  ];
  return (
    <div className="products-container">
      <h2>Welcome to our Fashion Store!</h2>
      <div className="product-grid">
        {productsData.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
            {/* Add to Cart button */}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            {/* Buy Now button */}
            <button onClick={() => handleBuyNow(product.id)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;