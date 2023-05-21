import styles from './CarList.module.css';
import CarCard from '../CarCard/CarCard';

export default function CarList({ carCards, handleAddToOrder }) {
  const items = carCards.map(item =>
    <CarCard
      key={item._id}
      handleAddToOrder={handleAddToOrder}
      carCard={item}
    />
  );
  return (
    <main className={styles.CarList}>
      {items}
    </main>
  );
}