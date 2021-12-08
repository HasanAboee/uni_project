import { useState, useRef } from "react";
import classes from "./auth_form.module.css";
import { signIn } from "next-auth/client"
async function creatUser(email, password) {
  const respone = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await respone.json();
  if (!respone.ok) {
    throw new Error(data.message || "مشکلی بوجود آمده است");
  }
  return data;
}
function AuthForm() {
  const inputEmail = useRef();
  const inputPassword = useRef();
  const [isLogin, setIsLogin] = useState(true);

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function SubmitHandler(event) {
    event.preventDefault();
    const selectedEmail = inputEmail.current.value;
    const selectedPassword = inputPassword.current.value;

    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        email: selectedEmail,
        password: selectedPassword,
      });
      console.log(result);
    } else {
      try {
        const result = await creatUser(selectedEmail, selectedPassword);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "ورود" : "عضویت"}</h1>
      <form onSubmit={SubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">ایمیل</label>
          <input type="email" id="email" required ref={inputEmail} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">کلمه عبور</label>
          <input type="password" id="password" required ref={inputPassword} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "ورود" : "ایجاد حساب کاربری"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "ایجاد حساب جدید" : "ورود با حساب موجود"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
