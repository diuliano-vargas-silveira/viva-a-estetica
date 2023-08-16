import { useNavigate } from "react-router-dom";

import { ROUTES } from "../../constants/routes";
import { iconPrincipal } from "../../assets";

import "./header.css";

export function Header({ title, onClick }) {
  const navigate = useNavigate();

  function handleClickButton() {
    onClick !== undefined ? onClick() : navigate(ROUTES.HOME);
  }

  return (
    <header className="header">
      <button onClick={handleClickButton}>
        <img
          src={iconPrincipal}
          alt="Um braço musculoso fazendo sinal de força"
        />
      </button>
      <h1>{title}</h1>
    </header>
  );
}
