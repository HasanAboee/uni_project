import styles from './face-summary.module.css';

function FaceSummary(props) {
  const { title } = props;

  return (
    <section className={styles.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default FaceSummary;