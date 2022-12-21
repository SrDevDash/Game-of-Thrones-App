import React, { useState } from "react";
import validate from "../FormLogin/validate";
import styles from "./FormSignUp.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormSignUp = () => {
  const navigate = useNavigate();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/users/singup", form)
      .then((data) => {
        console.log(data);
        data.data.result.success && navigate("/login");
      })
      .catch((err) => console.log(err, "error"));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.container}>
        <h2 className={styles.title}>SIGN UP</h2>

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
        <button
          disabled={errors.email || errors.password}
          className={styles.btn}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default FormSignUp;
