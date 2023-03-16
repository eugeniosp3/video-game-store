import React, { useState } from 'react';
import styles from '/styles/sidecard.module.css';
import Image from 'next/image';

function Sidecard({ items,  setcheckOutItems, setSubAmount }) {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setcheckOutItems([...cartItems, item]);
    setSubtotal(subtotal + Number(item.Cost));
    setSubAmount(subtotal + Number(item.Cost));
  };
  

  const renderCards = () => {
    return items.map((item, index) => (
      <Card key={index} item={item} addToCart={addToCart} />
    ));
  };

  return (
    <div className={styles.sidecardMain}>
      {renderCards()}
      {/* Pop-up dialog */}
      {cartItems.length > 0 && (
        <div>
          <h2>Cart Items:</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.ItemName} ({item.Type}) - {item.Cost}g
              </li>
            ))}
          </ul>
          <h2>Subtotal: {subtotal}g</h2>
        </div>
      )}
    </div>
  );
}

function Card({ item, addToCart}) {
  const [isRotated, setIsRotated] = useState(false);

  const handleRotation = () => {
    setIsRotated(!isRotated);
  };

  const handleDoubleClick = () => {
    const confirmAdd = window.confirm(`Do you want to add ${item.ItemName} to your cart?`);
    if (confirmAdd) {
      addToCart(item);
    }
  };

  return (
    <div
      className={`${styles.sidecardInner} ${isRotated && styles.rotate}`}
      onClick={handleRotation}
      onDoubleClick={handleDoubleClick} // Added double click event
    >
      <div className={styles.sidecardFront}>
        <div className={styles.sidecardFrontContent}>
          <h2 className={styles.sidecardFrontTitle}>{item.ItemName}</h2>
          <Image
            className={styles.itemImage}
            src={item.Path}
            alt="Item picture"
            width={80}
            height={80}
          />
        </div>
      </div>
      <div className={styles.sidecardBack}>
        <div className={styles.sidecardBackContent}>
          <h2 className={styles.sidecardBackTitle}>{item.ItemName}</h2>
          <div className={styles.textBodyBack}>
            <h2 className={styles.bodyTextBack}>{item.Description}</h2>
            <span className={styles.statsCost}>
              <h2 className={styles.textBodyBackCost}>{item.Cost}g</h2>
              <h2 className={styles.textBodyStats}>{item.Stat}</h2>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidecard;
