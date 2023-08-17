import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Footer, Header } from "../../components";
import { ENDPOINTS } from "../../constants/endpoints";
import { ROUTES } from "../../constants/routes";
import { isValidForm } from "../../utils";
import { postData } from "../../utils/axios-caseiro";

const DEFAULT_FORM = {
  image: "",
};

export function CreateStory() {
  const [form, setForm] = useState({ ...DEFAULT_FORM });

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isValidForm(form)) {
      alert("Formulário incompleto! Verifique os campos");
      return;
    }

    const { email } = JSON.parse(localStorage.getItem("user"));

    const res = await postData(ENDPOINTS.STORIES, { email, image: form.image });

    if (res) {
      navigate(ROUTES.HOME);
    }
  }

  function handleChange({ target: { name, value } }) {
    setForm({ ...form, [name]: value });
  }

  return (
    <div className="container">
      <Header title="Criar Story" />

      <main className="create__post">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="image"
            placeholder="IMAGE"
            onChange={handleChange}
            required
          />
          <button type="form">CRIAR STORY</button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
