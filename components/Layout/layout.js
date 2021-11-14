import styles from "./layout.module.css";
function layout(props) {
  return (
    <div>
      <nav className={styles.navigator}>
        <div className={styles.logo_box}>
          <img alt="logo" src="/logo.jpg" />
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
      <div>{props.children}</div>
      </div>
    
  );
}
export default layout;
