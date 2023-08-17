import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { Header } from "../../components/header/header";
import { ROUTES } from "../../constants/routes";

import { isValidForm } from "../../utils";

import { postData } from "../../utils/axios-caseiro";
import { ENDPOINTS } from "../../constants/endpoints";

import "./sign-in.css";

const DEFAULT_FORM = {
  email: "",
  password: "",
};

export function SignIn() {
  const [form, setForm] = useState({ ...DEFAULT_FORM });

  const navigate = useNavigate();

  function handleChange({ target: { name, value } }) {
    setForm({ ...form, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isValidForm(form)) {
      alert("Formulário incompleto! Verifique os campos");
      return;
    }

    const res = await postData(ENDPOINTS.SIGN_IN, {
      email: form.email,
      password: form.password,
    });

    if (res) {
      localStorage.setItem("user", JSON.stringify(res));
      navigate(ROUTES.HOME);
    }
  }

  return (
    <div className="container">
      <Header title={"VIVA A ESTÉTICA"} />

      <main className="sign-in">
        <form id="form" className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="SENHA"
            onChange={handleChange}
            className="sign-in__last-input"
            required
          />

          <Link to={ROUTES.SIGN_UP} className="sign-in__link">
            Não tenho conta
          </Link>

          <button type="submit">ENTRAR</button>
        </form>
      </main>

      <footer className="sign-in__footer" />
    </div>
  );
}
