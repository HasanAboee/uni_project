import styles from "./password_form.module.css";
import { useRef } from "react";
function PasswordForm() {
  const inputOldPassword = useRef();
  const inputNewPassword = useRef();
  async function SubmitHandler(event) {
    event.preventDefault();
    const selectedEmail = inputOldPassword.current.value;
    const selectedPassword = inputNewPassword.current.value;
  }
  return (
    <section className={styles.auth}>
      <h1>تغییر کلمه عبور</h1>
      <form onSubmit={SubmitHandler}>
        <div className={styles.control}>
          <label htmlFor="password">کلمه عبور قدیمی</label>
          <input type="password" id="password" required ref={inputOldPassword} />
        </div>
        <div className={styles.control}>
          <label htmlFor="password"> کلمه عبور جدید</label>
          <input type="password" id="password" required ref={inputNewPassword} />
        </div>
        <div className={styles.actions}>
          <button>اعمال</button>
        </div>
      </form>
    </section>
  );
}
export default PasswordForm;
