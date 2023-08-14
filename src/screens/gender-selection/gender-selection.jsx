import { useState } from 'react';

import { useNavigate } from "react-router-dom";

import { Header } from "../../components";
import { ROUTES } from "../../constants/routes";

import changeGenderIcon from "../../assets/reload.png";

import "./gender-selection.css";

const MOCK = [
  {
    image: "https://cdn.discordapp.com/attachments/480450726942736406/1140287755411271790/image_6.png",
    gender: "MASCULINO",
    alt: "homem levantando halter com o braço",
    id: 1
  },
  {
    image: "https://cdn.discordapp.com/attachments/480450726942736406/1140287755704881192/image_7.png",
    gender: "FEMININO",
    alt: "mulher levantando halter com o braço",
    id: 2
  }
]

export function GenderSelection() {
  const [gender, setGender] = useState(MOCK[0]);

  const navigate = useNavigate();

  function handleGenderChange() {
    setGender(olderGender =>
      olderGender.id === 1
        ? MOCK[1]
        : MOCK[0]
    )
  }

  function handleNextStepClick() {
    // TODO create objetives screen to navigate on click 
    localStorage.setItem("gender", gender.gender);
  }

  function handleFeedClick() {
    navigate(ROUTES.HOME);
  }

  function renderGenderOptions(gender) {
    return (
      <div className="gender__container">
        <img src={gender.image} alt={gender.alt} />
        <p>{gender.gender}</p>
        <img src={changeGenderIcon} alt="botão para realizar troca de sexo" onClick={handleGenderChange} className="change-gender" />
      </div>
    );
  }

  return (
    <div className="container">
      <Header title="META E FOCO" />

      <main className="gender-selection__main">
        <h1>QUAL É O SEU SEXO?</h1>

        {renderGenderOptions(gender)}

        <button onClick={handleNextStepClick} className="navigation__button">PRÓXIMO</button>
        <p>OU</p>
        <button onClick={handleFeedClick} className='navigation__button'>FEED</button>

      </main>

      <footer className="sign-in__footer" />
    </div>
  )
}
