import React from 'react';

const BuyNowButton = ({ product, onBuyNow }) => {
  const handleBuyNow = () => {
    onBuyNow(product);
  };

  return (
    <button onClick={handleBuyNow}>Buy Now</button>
  );
};

export default BuyNowButton;
