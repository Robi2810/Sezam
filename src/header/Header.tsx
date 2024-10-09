import React from "react";
import "./Header.css";
import logo from "./hse.svg";
import keycloak from "../Keycloak";
import person from "./person.svg";

function Header(name: string, surname: String) {
  const [showLogout, setShowLogout] = React.useState(false);

  return (
    <header className="header">
      <img src={logo} alt="Company Logo" className="logo" />
      <div className="name" onClick={(e) => setShowLogout(!showLogout)}>
        <img className="Header__img" src={person} />
      </div>
      <div className="logout" hidden={!showLogout} onClick={(e) => keycloak.logout()}>
        Выйти
      </div>
    </header>
  );
}

export default Header;
