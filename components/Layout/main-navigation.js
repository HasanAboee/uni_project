import styles from "./main-navigation.module.css";
import Link from "next/link";
function MainNavigation() {
  return (
    <header className={styles.menu}>
      <nav className={styles.main_container}>
        <div>
          <button>Log in</button>
        </div>
        <ul>
          <Link href='/'>
          <li>
            صفحه اصلی
          </li>
          </Link>
          
          <Link href='/'>
          <li className={styles.submenu}>
            مشاهیر
            <ul>
              <li>مشاهیر سیاسی</li>
            <li>مشاهیر هنری</li>
            <li>مشاهیر علمی</li>
            </ul>
          </li>
          </Link>
          
          <Link href='/'>
          <li>
            گالری
          </li>
          </Link>
          <Link href='/'>
          <li>
            درباره ما
          </li>
          </Link>
        </ul>
        <div>
          <img src="/1.png" alt="pic" />
        </div>
      </nav>
    </header>
  );
}
export default MainNavigation;
