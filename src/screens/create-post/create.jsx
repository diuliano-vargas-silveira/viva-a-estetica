import { useState } from "react";
import { Header, Footer } from "../../components";
import { postData } from "../../utils/axios-caseiro";
import { ENDPOINTS } from "../../constants/endpoints";
import { isValidForm } from "../../utils";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

import "./create-post.css";

const DEFAULT_FORM = {
  image: "",
};

export function CreatePost() {
  const [form, setForm] = useState({ ...DEFAULT_FORM });

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isValidForm(form)) {
      alert("Formulário incompleto! Verifique os campos");
      return;
    }

    const { email } = JSON.parse(localStorage.getItem("user"));

    const res = await postData(ENDPOINTS.POSTS, { email, image: form.image });

    if (res) {
      navigate(ROUTES.HOME);
    }
  }

  function handleChange({ target: { name, value } }) {
    setForm({ ...form, [name]: value });
  }

  return (
    <div className="container">
      <Header title="Criar Post" />

      <main className="create__post">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="image"
            placeholder="IMAGE"
            onChange={handleChange}
            required
          />
          <button type="form">CRIAR POST</button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
