import FigureItems from "./Figure_items";
import styles from "./Figure_List.module.css";
function FigureList(props) {
  return (
    <ul className={styles.list}>
      {props.figures.map((figure) => (
        <FigureItems
          key={figure._id}
          id={figure._id}
          title={figure.title}
          face={figure.face}
          image={figure.image}
          description={figure.description}
        />
      ))}
    </ul>
  );
}
export default FigureList;
