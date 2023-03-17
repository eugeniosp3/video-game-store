import React from 'react';
import styles from '/styles/Table.module.css';

function Table(props) {
  const items = props.checkoutItems;

  const handleDoubleClick = (index) => {
    const confirmRemove = window.confirm(`Do you want to remove ${items[index].ItemName} from your cart?`);
    if (confirmRemove) {
      props.handleRemoveItem(index);
    }
  };

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          <th className={styles.th}>Item Name</th>
          <th className={styles.th}>Item Type</th>
          <th className={styles.th}>Cost</th>
          <th className={styles.th}>Stat</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {items.map((item, index) => (
          <tr key={index} className={styles.tr} onDoubleClick={() => handleDoubleClick(index)}>
            <td className={styles.td}>{item.ItemName}</td>
            <td className={styles.td}>{item.ItemType}</td>
            <td className={styles.td}>{item.Cost}</td>
            <td className={styles.td}>{item.Stat}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
