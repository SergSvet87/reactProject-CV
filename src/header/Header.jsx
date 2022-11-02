import Logo from "/img/Main-logo-transformed.png";
import Nav from "./nav/Nav";
import "./Header.css";

function Header() {
  return (
    <header className="Header container">
      <a
        href="https://sergsvet87.github.io/My_RESUME/"
        className="header__logo"
      >
        <img
          src={Logo}
          alt="Logo"
          width="150"
          height="70"
        />
      </a>

      <Nav />
    </header>
  );
}

export default Header;
