import styles from "./layout.module.css";
function layout() {
  return (
    
      <nav className={styles.navigator}>
        <div className={styles.logo_box}>
          <img alt="logo" src="/logo.png" />
        </div>
        <ul>
          <li>صفحه نخست</li>
          <li>مقالات</li>
          <li>دوره‌ها</li>
          <li>درباره‌ی ما</li>
          <li>تماس با ما</li>
        </ul>
        <div className={styles.login_button_box}>
          <button>ورود</button>
        </div>
      </nav>
    
  );
}
export default layout;
