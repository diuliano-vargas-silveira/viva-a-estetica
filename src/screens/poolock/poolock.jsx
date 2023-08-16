import { useState } from "react";
import { Header, Footer } from "../../components";

import "./poolock.css";

const DEFAULT_FORM = {
  peito: "",
  escapula: "",
  axila: "",
  suprailico: "",
  abdomen: "",
  triceps: "",
  coxa: "",
  gluteo: "",
};

export function Poolock() {
  const [form, setForm] = useState({ ...DEFAULT_FORM });

  function handleChange({ target: { name, value } }) {
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="container">
      <Header />

      <main className="poolock">
        <h2>POLLOCK 7 DOBRAS</h2>

        <div className="poolock__table">
          <header className="poolock__grid">
            <span>MEMBROS</span>
            <span>MEDIDAS</span>
          </header>

          <form onSubmit={handleSubmit}>
            <div className="poolock__grid">
              <div>PEITO</div>
              <input type="number" name="peito" onChange={handleChange} />
            </div>
            <div className="poolock__grid">
              <div>ESCÁPULA</div>
              <input type="number" name="escapula" onChange={handleChange} />
            </div>
            <div className="poolock__grid">
              <div>AXILA</div>
              <input type="number" name="axila" onChange={handleChange} />
            </div>
            <div className="poolock__grid">
              <div>SUPRAILIACO</div>
              <input type="number" name="suprailico" onChange={handleChange} />
            </div>
            <div className="poolock__grid">
              <div>ABDÔMEN</div>
              <input type="number" name="abdomen" onChange={handleChange} />
            </div>
            <div className="poolock__grid">
              <div>TRÍCEPS</div>
              <input type="number" name="triceps" onChange={handleChange} />
            </div>
            <div className="poolock__grid">
              <div>COXA</div>
              <input type="number" name="coxa" onChange={handleChange} />
            </div>
            <div className="poolock__grid">
              <div>GLÚTEO</div>
              <input type="number" name="gluteo" onChange={handleChange} />
            </div>

            <button type="submit">ENVIAR</button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
