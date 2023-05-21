import styles from './CarCard.module.css';

export default function CarCard({ carCard, handleAddToOrder }) {
  console.log(carCard)
  console.log(carCard.src)
  return (
    <div className={styles.CarCard}>
      <img src={carCard.src} width="100%" alt="What's this"/>
      {/* <div className={styles.emoji + ' ' + 'flex-ctr-ctr'}>{car.emoji}</div> */}
      <div className={styles.name}>{carCard.name}</div>
      <div className={styles.buy}>
        {/* <span>${car.price.toFixed(2)}</span> */}
        <button className="btn-sm" onClick={() => handleAddToOrder(carCard._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}