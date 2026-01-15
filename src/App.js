import "./App.css";

const skills = [
  {
    skill: "HTML + CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "Intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#ff3800",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      {/* <img src="../public/formal.jpg" alt="Nehal Hamada" /> */}
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

export default App;

function Avatar() {
  return <img className="avatar" src="formal.jpg" alt="not found" />;
}

function Intro() {
  return (
    <div>
      <h1>Nehal Hamada</h1>
      <p>
        Frontend Developer with a focus on React.js, experienced in building
        responsive and scalable web applications. Passionate about clean code
        and modern web technologies.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    // my solution
    // <div className="skill-list">
    //   <Skill />
    // </div>

    // jones solution
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
    // <div className="skill-list">
    //   <Skill skill="HTML + CSS" emoji="💪🏻" color="blue" />
    //   <Skill skill="JavaScript" emoji="💪🏻" color="yellow" />
    //   <Skill skill="Web Design" emoji="💪🏻" color="lightgreen" />
    //   <Skill skill="Git and GitHub" emoji="💪🏻" color="red" />
    //   <Skill skill="React" emoji="💪🏻" color="lightblue" />
    //   <Skill skill="Svelte" emoji="👶🏻" color="red" />
    // </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    // my solution
    // <div>
    //   {skills.map((el) => (
    //     <div
    //       key={el.skill}
    //       className="skill"
    //       style={{ backgroundColor: el.color }}>
    //       <span>{el.skill}</span>
    // <span>
    //   {el.level === "advanced"
    //     ? "💪🏻"
    //     : el.level === "Intermediate"
    //     ? "👍🏻"
    //     : el.level === "beginner"
    //     ? "👶🏻"
    //     : ""}
    // </span>
    //     </div>
    //   ))}
    // </div>

    // jones solution
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "advanced" && "💪🏻"}
        {level === "Intermediate" && "👍🏻"}
        {level === "beginner" && "👶🏻"}
      </span>
    </div>
  );
}
