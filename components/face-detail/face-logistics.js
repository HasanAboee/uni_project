import Image from "next/image";

import LogisticsItem from './logistics-item';
import styles from "./face-logistics.module.css";

function FaceLogistics(props) {
  const { image, imageAlt, date,knowledge,face } = props;

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <Image src={`${image}`} alt={imageAlt} height={400} width={400} />
      </div>
      <ul className={styles.list}>
        <LogisticsItem >
          <time>{date}</time>
        </LogisticsItem>
        <LogisticsItem>
            {face}
            </LogisticsItem>
        <LogisticsItem>
          {knowledge}
          </LogisticsItem>
 
        <LogisticsItem>
          {/* <address>{addressText}</address> */}
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default FaceLogistics;
