import Hero from "./sections/hero/Hero";
import Skills from "./sections/skills/Skills";
import Contacts from "./sections/contacts/Contacts";
import "./Main.css";

function Main() {
  return (
    <main className="page">
      <Hero />

      <Contacts />

      <Skills />
    </main>
  );
}

export default Main;
