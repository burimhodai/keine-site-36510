import React, { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  const styles = {
    app: {
      fontFamily: 'sans-serif',
      textAlign: 'center',
      padding: '20px',
    },
    header: {
      backgroundColor: '#1D4ED8',
      color: 'white',
      padding: '10px',
      marginBottom: '20px',
    },
    productList: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    productCard: {
      border: '1px solid #ccc',
      margin: '10px',
      padding: '10px',
      width: '200px',
      textAlign: 'left',
    },
    productImage: {
      width: '100%',
      height: '150px',
      objectFit: 'cover',
      marginBottom: '10px',
    },
    productTitle: {
      fontSize: '1.2em',
      fontWeight: 'bold',
      marginBottom: '5px',
    },
    productPrice: {
      color: '#9333EA',
      marginBottom: '10px',
    },
    button: {
      backgroundColor: '#10B981',
      color: 'white',
      padding: '8px 16px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    cartContainer: {
      marginTop: '20px',
      borderTop: '1px solid #ccc',
      paddingTop: '20px',
    },
    cartItem: {
      marginBottom: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    cartTotal: {
      marginTop: '10px',
      fontWeight: 'bold',
    },
  };

  const products = [
    { id: 1, title: 'Product 1', price: 25, imageUrl: 'https://via.placeholder.com/200' },
    { id: 2, title: 'Product 2', price: 50, imageUrl: 'https://via.placeholder.com/200' },
    { id: 3, title: 'Product 3', price: 75, imageUrl: 'https://via.placeholder.com/200' },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1>E-commerce Store</h1>
      </header>

      <div style={styles.productList}>
        {products.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <img src={product.imageUrl} alt={product.title} style={styles.productImage} />
            <h3 style={styles.productTitle}>{product.title}</h3>
            <p style={styles.productPrice}>${product.price}</p>
            <button style={styles.button} onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div style={styles.cartContainer}>
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index} style={styles.cartItem}>
                <span>{item.title}</span>
                <span>${item.price}</span>
              </div>
            ))}
            <div style={styles.cartTotal}>
              Total: ${calculateTotal()}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;