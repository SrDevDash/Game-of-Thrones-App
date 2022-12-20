import React from "react";
import styles from "./FormLogin.module.css";
import { useState } from "react";

const validate = (data) => {
  const result = {};
  const expRegular =
    /^(([^<>()[\].,;:\s@\"]+(\.[^<>()[\].,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\].,;:\s@\"]+\.)+[^<>()[\].,;:\s@\"]{2,})$/i;

  if (!expRegular.test(data.email)) {
    result.email = "Email is not valid";
  }

  if (data.password.length < 5) {
    result.password = "Password must have a last 5 length";
  }

  !/[0-9]/.test(data.password) &&
    (result.password = "Password must have a last one number");

  return result;
};

const FormLogin = () => {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    setErrors(validate({ ...form, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <form className={styles.container}>
        <h2 className={styles.title}>SIGN IN</h2>

        <input
          placeholder="Email"
          className={errors.email ? styles.inputWarning : styles.input}
          type="text"
          name="email"
          onChange={handleChange}
          value={form.email}
        />
        {errors.email && <p className={styles.errorsText}>{errors.email}</p>}

        <input
          placeholder="Password"
          className={errors.email ? styles.inputWarning : styles.input}
          type="password"
          name="password"
          onChange={handleChange}
          value={form.password}
        />
        {errors.password && (
          <p className={styles.errorsText}>{errors.password}</p>
        )}

        <button disabled className={styles.btn}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
