import styles from "./content.module.css";
function content() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <img src="cover-face.jpg" alt="background" />
      </div>
      <p>به سایت چهره های ماندگار کشور خوش آمدید</p>
      <div className={styles.prof}>
        <img src="prof.jpg" alt="this is a prof pic" />
      </div>
      
    </div>
  );
}
export default content;
