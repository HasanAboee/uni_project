import Card from "./Card";
import styles from "./Figure_items.module.css";
import Link from "next/link";
import { useSession } from "next-auth/client";
function FigureItems(props) {
  const { id } = props;
  const moreDetailedFaces = `/faces/${id}`;
  const [session, loading] = useSession();
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.edit_delete}>
          <div className={styles.delete_edit}>
            {session && <button>حذف</button>}
          </div>
          <div className={styles.delete_edit}>
            {session && <button>ویرایش</button>}
          </div>
        </div>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>

          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <Link href={moreDetailedFaces}>
            <button>جزئیات بیشتر</button>
          </Link>
        </div>
      </Card>
    </li>
  );
}
export default FigureItems;
