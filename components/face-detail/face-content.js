import styles from './face-content.module.css';

function FaceContent(props) {
  return (
    <section className={styles.content}>
      {props.children}
    </section>
  );
}

export default FaceContent;
