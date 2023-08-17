import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Header } from "../../components/header/header";
import { ROUTES } from "../../constants/routes";

import { isValidForm } from "../../utils";
import { postData } from "../../utils/axios-caseiro";
import { ENDPOINTS } from "../../constants/endpoints";

const DEFAULT_FORM = {
  email: "",
  image: "",
  password: "",
  c_password: "",
};

export function SignUp() {
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

    if (form.password !== form.c_password) {
      alert("As senhas devem coincidir!");
      return;
    }

    const res = await postData(ENDPOINTS.SIGN_UP, {
      email: form.email,
      password: form.password,
      image: form.image,
      gender: "",
    });

    if (res) {
      alert("Usuário criado!");
      navigate(ROUTES.SIGN_IN);
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
            type="text"
            name="image"
            placeholder="IMAGEM"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="SENHA"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="c_password"
            placeholder="CONFIRMAR SENHA"
            onChange={handleChange}
            className="sign-in__last-input"
            required
          />

          <Link to={ROUTES.SIGN_IN} className="sign-in__link">
            Já tenho conta
          </Link>

          <button type="submit">CADASTRAR</button>
        </form>
      </main>

      <footer className="sign-in__footer" />
    </div>
  );
}
