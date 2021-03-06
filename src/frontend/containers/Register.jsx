import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Register.scss';
import { registerUserRequest } from '../actions/index';
import Header from '../components/Header';

function Register({ history }) {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: '',
    name: '',
    password: '',
  });

  function handleInput(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(registerUserRequest(form, '/login'));
  }

  return (
    <>
      <Header isRegister />
      <section className="register">
        <section className="register__container">
          <h2>Regístro</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>
            <input
              name="name"
              className="input"
              type="name"
              placeholder="Nombre"
              value={form.name}
              onChange={handleInput}
            />
            <input
              name="email"
              className="input"
              type="text"
              placeholder="Correo"
              value={form.email}
              onChange={handleInput}
            />
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Contraseña"
              value={form.password}
              onChange={handleInput}
            />
            <button type="submit" className="button">Registrame</button>
          </form>
          <Link to="/login">
            <button type="button" className="button-transparent">Iniciar sesión</button>
          </Link>
        </section>
      </section>
    </>
  );
}

export default Register;
