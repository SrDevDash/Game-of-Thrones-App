import React from "react";

import styles from "./FormLogin.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validate from "./validate";
import axios from "axios";

const FormLogin = () => {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // esperando por backend y redux para terminar la implementación
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.password || !errors.email) {
      axios
        .post("http://localhost:3001/users/login", form)
        .then((data) => {
          if (data.data.result.access) {
            navigate("/");
          } else {
            alert("Usuario no encontrado");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    setErrors(validate({ ...form, [e.target.name]: e.target.value }));
  };

  const handleRegister = () => {
    navigate("/signup");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.container}>
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
        <button
          disabled={errors.email || errors.password}
          className={styles.btn}
        >
          Log In
        </button>
        <div>
          <p onClick={handleRegister}>Register</p>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
