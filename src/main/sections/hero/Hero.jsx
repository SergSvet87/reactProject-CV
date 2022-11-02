import DataBase from "/src/db.json";
import UserImage from "/img/letter.jpeg";
import "./Hero.css";

function Hero() {
  const heading= DataBase.app.users[0].heading;
  const userName = DataBase.app.users[0].about.name;
  const userAge = DataBase.app.users[0].about.age;
  const userCity = DataBase.app.users[0].about.city;
  const userProfession = DataBase.app.users[0].about.profession;
  const userOrganization = DataBase.app.users[0].about.organization;

  return (
    <section
      className="Hero container"
      id="about"
    >
      <img
        src={UserImage}
        alt="My avatar"
        className="header-photo"
        width="312"
        height="297"
      />
      <div className="header-text">
        <strong className="header-strong">{heading} <span className="hero__heading">👋</span></strong>
        <h1 className="header-heading">
          Мене звуть, <em className="header-heading__name">{userName},</em> мені подобається розробляти веб-сайти та веб-додатки, тому  хочу стати 
          <span className="header-primary">
            FrontEnd-розробником.
          </span>
          <br />
        </h1>
        <p>Наразі мені {userAge} років, я із <span className="header-primary">{userCity}, </span>працюю <span className="header-primary">{userProfession}</span> в <span className="header-primary">{userOrganization},</span> філія &#171;Укргазвидобування&#187;. </p>
      </div>
    </section>
  );
}

export default Hero;
