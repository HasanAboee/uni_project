import styles from "./layout.module.css";

function layout(props) {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navigator}>
        <div className={styles.logo_box}>
          <img alt="logo" src="/logo.jpg" />
        </div>
        <ul>
          <li>صفحه نخست</li>
          <li className={styles.submenu}>چهره ها
            <ul>
              <li>بازیگران</li>
              <li>آهنگسازان</li>
              <li>دانشمندان</li>
            </ul>
          </li>
          <li>دوره‌ها</li>
          <li>درباره‌ی ما</li>
          <li>تماس با ما</li>
        </ul>
        <div className={styles.login_button_box}>
          <button>ورود</button>
        </div>
        
      </nav>
      <div>{props.children}</div>
      <div className={styles.push}></div>
      <div className={styles.footer}>
        <ul>
          <li>بهینه سازی و توسعه توسط: حسن ابویی مهریزی</li>
          <li>راه ارتباطی با ما</li>
        </ul>
      </div>
      </div>
    
  );
}
export default layout;
