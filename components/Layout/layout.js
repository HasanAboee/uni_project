import styles from "./layout.module.css";
import {useRouter} from 'next/router'
import Link from "next/link";
import React from "react";
import { ImTelegram } from "react-icons/im";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import FaceSearch from "../Lasting_Figuers/search";
function layout(props) {
  const router = useRouter();
  function findFaceHandler(name,category){
    const fullPath = `/faces/${name}/${category}`;
    router.push(fullPath);
  }
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navigator}>
        <div className={styles.logo_box}>
          <img alt="logo" src="/logo.jpg" />
        </div>
        <ul>
          <Link href="/">
            <li>صفحه نخست</li>
          </Link>
          <Link href="/form">
            <li>ثبت چهره جدید</li>
          </Link>
          <li className={styles.submenu}>
            چهره ها
            <ul>
              <li>پزشکی و علوم تجربی</li>
              <li>مهندسی</li>
              <li>ریاضیات و فیزیک</li>
              <li>سینما</li>
              <li>موسیقی</li>
              <li>هنر های تجسمی</li>
              <li>ادب و فرهنگ</li>
              <li>الهیات</li>
              <li>تاریخ</li>
              <li>جغرافیا</li>
              <li>فلسفه</li>
              <li>علوم انسانی</li>
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
        <div className={styles.contact}>راه ارتباطی با ما</div>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <ImTelegram />
          </div>
          <div className={styles.icon}>
            <AiFillFacebook />
          </div>
          <div className={styles.icon}>
            <AiOutlineInstagram />
          </div>
          <div className={styles.icon}>
            <AiFillTwitterCircle />
          </div>
        </div>
        <div><FaceSearch OnSearch={findFaceHandler}/></div>
      </div>
    </div>
  );
}
export default layout;
