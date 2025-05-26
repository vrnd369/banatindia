import React from "react";
import "./cart.css";

/**
 * @typedef {Object} CartItem
 * @property {string} id
 * @property {string} name
 * @property {string} image
 * @property {number} price
 * @property {number} quantity
 * @property {string} [color]
 * @property {string} [styleName]
 * @property {string} [seller]
 * @property {boolean} [isGift]
 * @property {boolean} [isAmazonFulfilled]
 * @property {boolean} isInStock
 * @property {string} [deliveryInfo]
 */

const Cart = ({
  cartItems,
  incrementQuantity,
  decrementQuantity,
  onDelete,
  onSaveForLater,
  onShare,
}) => {
  if (!cartItems || cartItems.length === 0) {
    return <div className="cart-empty">Your cart is empty.</div>;
  }

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item card">
            <img
              src={item.image.default || item.image}
              alt={item.name}
              className="cart-item-image"
            />
            <div className="cart-item-info">
              <h4>{item.name}</h4>
              {item.color && (
                <p className="cart-item-detail">Colour: {item.color}</p>
              )}
              {item.styleName && (
                <p className="cart-item-detail">Style: {item.styleName}</p>
              )}
              {item.seller && (
                <p className="cart-item-detail">Sold by: {item.seller}</p>
              )}
              <p className="cart-item-detail">
                Price: <span className="cart-item-price">₹{item.price}</span>
              </p>
              <div className="quantity-control">
                <button
                  onClick={() => decrementQuantity(item.id)}
                  className="qty-btn"
                >
                  -
                </button>
                <span className="qty-value">{item.quantity}</span>
                <button
                  onClick={() => incrementQuantity(item.id)}
                  className="qty-btn"
                >
                  +
                </button>
              </div>
              <p className="cart-item-subtotal">
                Subtotal: ₹{item.price * item.quantity}
              </p>
              <div className="cart-item-actions">
                <button
                  className="cart-action-link"
                  onClick={() => onDelete && onDelete(item.id)}
                >
                  Delete
                </button>
                <button
                  className="cart-action-link"
                  onClick={() => onSaveForLater && onSaveForLater(item.id)}
                >
                  Save for later
                </button>
                <button
                  className="cart-action-link"
                  onClick={() => onShare && onShare(item.id)}
                >
                  Share
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total-bar">
        <span>
          Subtotal ({cartItems.reduce((sum, i) => sum + i.quantity, 0)} items):
        </span>
        <span className="cart-total">₹{totalPrice}</span>
      </div>
    </div>
  );
};

export default Cart;
