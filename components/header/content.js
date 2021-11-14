import styles from "./content.module.css";
function content() {
  return (
    <div className={styles.container}>
      <p>به سایت چهره های ماندگار کشور خوش آمدید</p>
      <div className={styles.prof}>
        <img src="prof.jpg" alt="this is a prof pic" />
      </div>
    </div>
  );
}
export default content;
