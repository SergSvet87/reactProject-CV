import DataBase from "/src/db.json";
import "./Nav.css";

function Nav() {
  const navigation = DataBase.app.users[0].header.nav;

  return (
    <nav className="navigation">
      <ul className="nav-list">
        {navigation.map((item) => (
          <li
            className="nav-item"
            key={item.id}
          >
            <a
              href={item.link}
              className="nav-link"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
