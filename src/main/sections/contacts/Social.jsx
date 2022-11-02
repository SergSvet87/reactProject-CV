import DataBase from "/src/db.json";
import "./Contacts.css";

function Social() {
  const socials = DataBase.app.users[0].socials;

  return (
    <ul className="contact__socials socials">
      {socials.map((social, index) => (
        <li
          className="socials-item"
          key={index}
        >
          <a
            className="socials-item__link"
            target="_blank"
            href={`${social.socialLink}`}
          >
            <img
              src={`${social.socialImage}`}
              alt={`${social.socialName} icon`}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Social;
