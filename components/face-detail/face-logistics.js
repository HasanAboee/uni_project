
import Image from 'next/image'

// import LogisticsItem from './logistics-item';
import styles from './face-logistics.module.css';

function FaceLogistics(props) {
  const {image, imageAlt } = props;


  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <Image src={`/${image}`} alt={imageAlt} height={400} width={400} />
      </div>
    </section>
  );
}

export default FaceLogistics;
