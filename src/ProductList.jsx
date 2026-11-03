import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems } from './CartSlice.jsx';
import { categories, plants } from './plantData.js';

export default function ProductList({ onViewCart }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isAdded = (id) => cartItems.some((item) => item.id === id);

  return (
    <main className="standard-page product-page">
      <section className="page-intro">
        <span className="section-kicker">Find your perfect green companion</span>
        <h1>Our Plant Collection</h1>
        <p>Explore plants chosen to make your home feel more alive.</p>
      </section>
      {categories.map((category) => (
        <section className="category-section" key={category} aria-label={category}>
          <div className="category-heading"><h2>{category}</h2><span>{plants.filter((p) => p.category === category).length} plants</span></div>
          <div className="product-grid">
            {plants.filter((plant) => plant.category === category).map((plant) => (
              <article className="product-card" key={plant.id}>
                <div className="product-art"><img src={plant.image} alt={plant.name} /></div>
                <div className="product-content">
                  <h3>{plant.name}</h3>
                  <p>{plant.description}</p>
                  <div className="product-footer">
                    <strong>${plant.price.toFixed(2)}</strong>
                    <button className="primary-button add-button" disabled={isAdded(plant.id)} onClick={() => dispatch(addItem(plant))}>
                      {isAdded(plant.id) ? 'Added to Cart ✓' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
      <div className="view-cart-area"><button className="outline-button" onClick={onViewCart}>View Shopping Cart →</button></div>
    </main>
  );
}
