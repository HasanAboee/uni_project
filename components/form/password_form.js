import styles from "./password_form.module.css";
import { useRef } from "react";
function PasswordForm(props) {
  const inputOldPassword = useRef();
  const inputNewPassword = useRef();
  async function SubmitHandler(event) {
    event.preventDefault();
    const selectedOldPassword = inputOldPassword.current.value;
    const selectedNewPassword = inputNewPassword.current.value;
    props.onChangePassword({
      oldPassword: selectedOldPassword,
      newPassword: selectedNewPassword,
    });
  }
  return (
    <section className={styles.auth}>
      <h1>تغییر کلمه عبور</h1>
      <form onSubmit={SubmitHandler}>
        <div className={styles.control}>
          <label htmlFor="password">کلمه عبور قدیمی</label>
          <input
            type="password"
            id="oldPassword"
            required
            ref={inputOldPassword}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="password"> کلمه عبور جدید</label>
          <input
            type="password"
            id="newPassword"
            required
            ref={inputNewPassword}
          />
        </div>
        <div className={styles.actions}>
          <button>اعمال</button>
        </div>
      </form>
    </section>
  );
}
export default PasswordForm;
