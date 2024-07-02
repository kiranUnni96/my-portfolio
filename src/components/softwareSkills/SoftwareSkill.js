import React from "react";
import "./SoftwareSkill.scss";
import { 
  SiHtml5,
  SiCss3,
  SiStyledcomponents,
  SiSass,
  SiJavascript,
  SiReact,
  SiNodedotjs, 
  SiBootstrap,  
  SiHeroku,
  SiFirebase,
  SiLinux,
  SiSpring,
  SiSpringboot,
  SiSpringsecurity,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGrafana,
  SiPrometheus,
  SiZod,
  SiAmazonaws,
  SiTailwindcss,
  SiPrisma,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGit,
  SiGithub

}
  from "react-icons/si";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          <li className="software-skill-inline">
            <i><SiHtml5 /></i>
            <p>html-5</p>
          </li>
          <li className="software-skill-inline">
            <i><SiCss3 /></i>
            <p>css3</p>
          </li>
          <li className="software-skill-inline">
            <i><SiStyledcomponents /></i>
            <p>StyledComponents</p>
          </li>
          <li className="software-skill-inline">
            <i><SiSass /></i>
            <p>sass</p>
          </li>
          <li className="software-skill-inline">
            <i><SiJavascript /></i>
            <p>JavaScript</p>
          </li>
          <li className="software-skill-inline">
            <i><SiZod /></i>
            <p>Zod</p>
          </li>
          <li className="software-skill-inline">
            <i><SiBootstrap /></i>
            <p>Bootstrap</p>
          </li>
          <li className="software-skill-inline">
            <i><SiReact /></i>
            <p>reactjs</p>
          </li>
          <li className="software-skill-inline">
            <i><SiNodedotjs /></i>
            <p>nodejs</p>
          </li> 
          <li className="software-skill-inline">
            <i><SiAmazonaws /></i>
            <p>Amazon AWS</p>
          </li>       
          <li className="software-skill-inline">
            <i><SiHeroku /></i>
            <p>heroku</p>
          </li>
          <li className="software-skill-inline">
            <i><SiFirebase /></i>
            <p>firebase</p>
          </li>
          <li className="software-skill-inline">
            <i><SiSpring /></i>
            <p>Spring</p>
          </li>
          <li className="software-skill-inline">
            <i><SiSpringboot /></i>
            <p>Springboot</p>
          </li>
          <li className="software-skill-inline">
            <i><SiLinux /></i>
            <p>linux</p>
          </li>
          <li className="software-skill-inline">
            <i><SiSpringsecurity /></i>
            <p>Springsecurity</p>
          </li>
          <li className="software-skill-inline">
            <i><SiMysql /></i>
            <p>Mysql</p>
          </li>
          <li className="software-skill-inline">
            <i><SiPostgresql /></i>
            <p>Postgresql</p>
          </li>
          <li className="software-skill-inline">
            <i><SiMongodb /></i>
            <p>Mongodb</p>
          </li>          
          <li className="software-skill-inline">
            <i><SiGrafana /></i>
            <p>Grafana</p>
          </li>
          <li className="software-skill-inline">
            <i><SiPrometheus /></i>
            <p>Prometheus</p>
          </li>
          <li className="software-skill-inline">
            <i><SiTailwindcss /></i>
            <p>Tailwindcss</p>
          </li>
          <li className="software-skill-inline">
            <i><SiPrisma /></i>
            <p>Prisma</p>
          </li>
          <li className="software-skill-inline">
            <i><SiDocker /></i>
            <p>Docker</p>
          </li>
          <li className="software-skill-inline">
            <i><SiKubernetes /></i>
            <p>Kubernetes</p>
          </li>
          <li className="software-skill-inline">
            <i><SiJenkins /></i>
            <p>Jenkins</p>
          </li>
          <li className="software-skill-inline">
            <i><SiGit /></i>
            <p>Git</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
