import React from 'react';
import './shop.css';

// Import your images here
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.avif';
import pic6 from '../assets/pic6.jpg';
import pic7 from '../assets/pic7.avif';
import pic8 from '../assets/pic8.avif';
import pic9 from '../assets/pic9.jpg';
import pic10 from '../assets/pic10.avif';
import pic11 from '../assets/pic11.avif';
import pic12 from '../assets/pic12.avif';

const childrenProducts = [
  { id: 1, name: "Soft Toothbrush", price: 99, image: pic4 },
  { id: 2, name: "Medium Bristle", price: 120, image: pic5 },
  { id: 3, name: "Kids Brush", price: 85, image: pic6 }
];

const adultProducts = [
  { id: 4, name: "Soft Adult Brush", price: 150, image: pic7 },
  { id: 5, name: "Medium Adult Brush", price: 180, image: pic8 },
  { id: 6, name: "Hard Adult Brush", price: 200, image: pic9 }
];
const v="Quantity";
const oldAgeProducts = [
  { id: 7, name: "Soft Old Age Brush", price: 130, v, image: pic10 },
  { id: 8, name: "Medium Old Age Brush", price: 160, image: pic11 },
  { id: 9, name: "Special Old Age Brush", price: 190, image: pic12 }
];

const Shop = ({ addToCart }) => {
  return (
    <div className="shop-container">
      <section>
        <h2>Children Toothbrushes</h2>
        <div className="product-grid">
          {childrenProducts.map(product => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image.default || product.image} 
                alt={product.name} 
                className="product-image" 
              />
              <h4>{product.name}</h4>
              <p className="product-price">₹{product.price}</p>
              <button 
                className="cart-btn" 
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Adult Toothbrushes</h2>
        <div className="product-grid">
          {adultProducts.map(product => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image.default || product.image} 
                alt={product.name} 
                className="product-image" 
              />
              <h4>{product.name}</h4>
              <p className="product-price">₹{product.price}</p>
              <button 
                className="cart-btn" 
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Old Age Toothbrushes</h2>
        <div className="product-grid">
          {oldAgeProducts.map(product => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image.default || product.image} 
                alt={product.name} 
                className="product-image" 
              />
              <h4>{product.name}</h4>
              <p className="product-price">₹{product.price}</p>
              <button 
                className="cart-btn" 
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Shop;
