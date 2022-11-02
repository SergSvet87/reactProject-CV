import DataBase from "/src/db.json";
import "./Skills.css";

function Skills() {
  const skills = DataBase.app.users[0].skills;

  return (
    <section
      className="Skills container"
      id="skills"
    >
      <h2 className="skills-title">Працюю з різними інструментами</h2>
      <ul className="tags">
        {skills.map((skill) => (
          <li
            className="tags-item"
            key={skill}
          >
            <a
              href="#"
              className="tag"
            >
              {skill}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
