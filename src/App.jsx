import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import { selectCartCount } from './CartSlice.jsx';

export default function App() {
  const [page, setPage] = useState('home');
  const cartCount = useSelector(selectCartCount);
  const navigate = (nextPage) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-shell">
      {page !== 'home' && (
        <header className="site-header">
          <button className="brand" onClick={() => navigate('home')} aria-label="Paradise Nursery home">
            <span className="brand-icon">✳</span> Paradise Nursery
          </button>
          <nav className="nav-actions" aria-label="Main navigation">
            <button className={page === 'shop' ? 'nav-link selected' : 'nav-link'} onClick={() => navigate('shop')}>Plants</button>
            <button className={page === 'about' ? 'nav-link selected' : 'nav-link'} onClick={() => navigate('about')}>About Us</button>
            <button className={page === 'cart' ? 'cart-button selected' : 'cart-button'} onClick={() => navigate('cart')} aria-label={`Shopping cart with ${cartCount} items`}>
              <span aria-hidden="true">🛒</span> Cart <span className="cart-count">{cartCount}</span>
            </button>
          </nav>
        </header>
      )}

      {page === 'home' && (
        <main className="landing-page">
          <div className="landing-overlay" />
          <section className="landing-content" aria-labelledby="hero-heading">
            <div className="eyebrow">A little green goes a long way</div>
            <h1 id="hero-heading">Paradise<br /><em>Nursery</em></h1>
            <p>Beautiful Plants, Better Spaces</p>
            <button className="primary-button get-started" onClick={() => navigate('shop')}>Get Started <span aria-hidden="true">→</span></button>
          </section>
          <section className="landing-about"><AboutUs compact /></section>
        </main>
      )}
      {page === 'shop' && <ProductList onViewCart={() => navigate('cart')} />}
      {page === 'cart' && <CartItem onContinueShopping={() => navigate('shop')} />}
      {page === 'about' && <main className="standard-page"><AboutUs /></main>}
      {page !== 'home' && <footer className="site-footer">© {new Date().getFullYear()} Paradise Nursery · Grow something wonderful.</footer>}
    </div>
  );
}
