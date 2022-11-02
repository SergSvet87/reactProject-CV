import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import DataBase from "/src/db.json";
import Social from "./Social";
import "./Contacts.css";

function Contacts() {
  const userAddress = DataBase.app.users[0].contacts.address;
  const userAddressLink = DataBase.app.users[0].contacts.addressLink;
  const userCountry = DataBase.app.users[0].about.country;
  const userPhone = DataBase.app.users[0].contacts.phone;
  const userEmail = DataBase.app.users[0].contacts.email;

  return (
    <section className="Contacts" id="contacts">
      <h2 className="title-h2">Contacts:</h2>
      <address>
        <p className="contact__item">
          <span className="contact-type">A:</span>
          <a
            className="contact-link"
            target="_blank"
            href={userAddressLink}
          >
            {userCountry}, {userAddress}
          </a>
        </p>
        <p className="contact__item">
          <span className="contact-type">P:</span>
          <a
            className="contact-link"
            target="_blank"
            href={`tel:${userPhone}`}
          >
            {userPhone}
          </a>
        </p>

        <p className="contact__item">
          <span className="contact-type lang-contact-email">E:</span>
          <a
            className="contact-link email"
            target="_blank"
            href={`mailto:${userEmail}`}
          >
            {userEmail}
          </a>
        </p>

        <div className="row justify-content-center align-items-center mt-4">
          <Social />
        </div>
      </address>
    </section>
  );
}

export default Contacts;
