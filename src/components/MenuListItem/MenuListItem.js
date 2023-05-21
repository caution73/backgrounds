import styles from './MenuListItem.module.css';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  console.log(menuItem)
  console.log(menuItem.src)
  return (
    <div className={styles.MenuListItem}>
      <img src={menuItem.src} width="100" height="100" alt="What's this"/>
      {/* <div className={styles.emoji + ' ' + 'flex-ctr-ctr'}>{menuItem.emoji}</div> */}
      <div className={styles.name}>{menuItem.name}</div>
      <div className={styles.buy}>
        {/* <span>${menuItem.price.toFixed(2)}</span> */}
        <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}