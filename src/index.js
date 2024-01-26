import React, { StrictMode } from "react";
import ReactDom from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "orangered",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "yellow",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
  {
    skill: "Git and Github",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "green",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="naruto-1.png" alt="naruto" />;
}

function Intro() {
  return (
    <div>
      <h1>Surjoyday Talukdar</h1>
      <p>
        Enthusiastic and self-driven Front End Developer with a solid
        understanding of front end technologies, aiming to leverage skills and
        contribute to delivering cutting-edge web solutions
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj: { skill, level, color } }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "advanced" && "💪"}
        {level === "intermediate" && "👍"}
      </span>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
