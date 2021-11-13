import Card from './Card';
import styles from './Figure_items.module.css'
import Link from 'next/link'
function FigureItems(props) {
  const {id} = props;
  const moreDetailedFaces= `/faces/${id}`;
  return (
    <li className={styles.item}>
        <Card>
      <div className={styles.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={styles.content}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className={styles.actions}>
        <Link href={moreDetailedFaces}><button>جزئیات بیشتر</button></Link>
      </div>
      </Card>
    </li>
  );
}
export default FigureItems;
