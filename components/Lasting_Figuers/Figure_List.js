import FigureItems from "./Figure_items";
import styles from "./Figure_List.module.css";
function FigureList(props) {
  return (
    <ul className={styles.list}>
      {props.figures.map((figure) => (
        <FigureItems
          key={figure.id}
          id={figure.id}
          title={figure.title}
          image={figure.image}
          description={figure.description}
        />
      ))}
    </ul>
  );
}
export default FigureList;
