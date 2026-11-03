import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity, selectCartItems, selectCartCount, selectCartTotal } from './CartSlice.jsx';

export default function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectCartCount);
  const totalCost = useSelector(selectCartTotal);
  const money = (amount) => `$${amount.toFixed(2)}`;

  return (
    <main className="standard-page cart-page">
      <section className="page-intro">
        <span className="section-kicker">Your green companions</span>
        <h1>Shopping Cart</h1>
        <p>Total Cart Amount: <strong>{money(totalCost)}</strong></p>
      </section>
      {items.length === 0 ? (
        <div className="empty-cart"><div className="empty-icon">🪴</div><h2>Your cart is empty</h2><p>Find a plant you love to get started.</p><button className="primary-button" onClick={onContinueShopping}>Continue Shopping</button></div>
      ) : (
        <div className="cart-layout">
          <section className="cart-list" aria-label="Cart items">
            {items.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h2>{item.name}</h2>
                  <p>Unit Cost: {money(item.price)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <div className="quantity-actions">
                    <button aria-label={`Decrease quantity of ${item.name}`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>−</button>
                    <span aria-live="polite">{item.quantity}</span>
                    <button aria-label={`Increase quantity of ${item.name}`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
                    <button className="delete-button" onClick={() => dispatch(removeItem(item.id))}>Delete</button>
                  </div>
                </div>
                <strong className="line-total">{money(item.price * item.quantity)}</strong>
              </article>
            ))}
          </section>
          <aside className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row"><span>Total items</span><strong>{totalQuantity}</strong></div>
            <div className="summary-row summary-total"><span>Total cost</span><strong>{money(totalCost)}</strong></div>
            <button className="primary-button checkout-button" onClick={() => window.alert('Coming Soon!')}>Checkout</button>
            <button className="outline-button continue-button" onClick={onContinueShopping}>Continue Shopping</button>
          </aside>
        </div>
      )}
    </main>
  );
}
