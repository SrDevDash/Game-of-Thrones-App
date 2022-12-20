import React from "react";
import styles from "./FormLogin.module.css";

const FormLogin = () => {
  return (
    <div>
      <form className={styles.container}>
        <h2 className={styles.title}>SIGN IN</h2>

        <input
          placeholder="Email"
          className={styles.input}
          type="text"
          name="email"
        />

        <input
          placeholder="Password"
          className={styles.input}
          type="password"
          name="password"
        />
        <button className={styles.btn}>Log In</button>
      </form>
    </div>
  );
};

export default FormLogin;
