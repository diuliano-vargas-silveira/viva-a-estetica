import { iconPrincipal } from "../../assets";

import "./header.css";

export function Header({ title }) {
  return (
    <header className="header">
      <img
        src={iconPrincipal}
        alt="Um braço musculoso fazendo sinal de força"
      />
      <h1>{title}</h1>
    </header>
  );
}
