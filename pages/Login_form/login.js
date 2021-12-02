import { Fragment } from "react";
import styles from "./login.module.css";
function Login() {
  
  
  return (
    <div className={styles.login_page}>
    <div className={styles.form}>
      <div className={styles.login}>
        <div className={styles.login_header}>
          <h3>ورود</h3>
          <p>لطفا نام کاربری و کلمه عبور خود را وارد نمایید.</p>
        </div>
      </div>
      <form className={styles.login_form} >
        <input type="text" placeholder="نام کاربری"/>
        <input type="password" placeholder="کلمه عبور"/>
        <button>ورود</button>
        <p className={styles.message}>ثبت نام نکرده اید؟<a href="#">ایجاد حساب کاربری</a></p>
      </form>
    </div>
  </div> 
   );
}
export default Login;
