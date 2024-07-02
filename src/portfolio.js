import emoji from "react-easy-emoji";
import NewYorkLife from "./assets/images/NewYorkLife.png";
import NEU from "./assets/images/NEU.png"
import CrowdDoing from "./assets/images/CrowdDoing.jpeg";
import Oracle from "./assets/images/Oracle.jpg";
import RagiMedia from "./assets/images/Ragi_Media.jpeg"



const illustration = {
  animated: true 
};

const greeting = {
  username: "Kiran Choorakattukara Unnikrishnan",
  title: "Hi all, I'm Kiran",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with Java/ JavaScript / Reactjs / Node.js and some other cool libraries and frameworks"
  ),
  resumeLink:
    "https://drive.google.com/file/d/17DYTUpwF5G0lm3-YrUXhOMKau6hpWUzU/view?usp=sharing",
  displayGreeting: true 
};


const socialMediaLinks = {
  github: "https://github.com/kiranUnni96",
  linkedin: "http://www.linkedin.com/in/kiran-unnikrishnan/",
  gmail: "kiranunnikrishnan07@gmail.com",    
  display: true 
};


const skillsSection = {
  title: "What I do",
  subTitle: "Passionate Full Stack Developer Eager to Explore Diverse Technologies",
  skills: [],
  display: true
};


const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Northeastern University",
      logo: NEU,
      subHeader: "Master of Science in Information Systems",
      duration: "2021 - 2023",
    },
  ]
};


const workExperiences = {
  describe: "PLACES I WORKED TO GAIN SOME SKILLS",
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "CrowdDoing",
      companylogo: CrowdDoing,
      date: "March 2024",
      desc: "",
      descBullets: [
        "Developed full-stack features for the Nature Counter application using Spring Boot, React, Docker, and PostgreSQL, enhancing user experience and application performance.",
        "Optimized the development process and improved code quality by implementing a GitHub Actions workflow for CI/CD that includes unit tests, artifact building, and AMI creation, achieving a 35% reduction in deployment times."
      ]
    },
    {
      role: "Software Engineer Co-op",
      company: "New York Life Insurance – R&D Labs",
      companylogo: NewYorkLife,
      date: "Sep 2022 – Jan 2023",
      desc: "",
      descBullets: [
        "Crafted intuitive UIs with React and Material-UI, ensuring a responsive, visually appealing experience through  reusable components and Material Design principles",
        "Managed AWS infrastructure and automated CI/CD pipelines using CodeBuild, CodePipeline, Lambda, and Terraform, with monitoring through Cloudwatch and Cloudtrail."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Oracle",
      companylogo: Oracle,
      date: "Sep 2018 - July 2021",
      desc: "",
      descBullets: [
        "Designed and deployed scalable RESTful APIs using Java Spring Boot, efficiently handling over 1,000,000 concurrent users with low latency and high reliability.",
        "Developed responsive and dynamic web pages with ReactJS and Redux, implementing React Hooks and CSS frameworks for enhanced user interfaces."      
      ]
    },
    {
      role: "Software Developer",
      company: "Ragi Media",
      companylogo: RagiMedia,
      date: "Feb 2016 - July 2018",
      desc: "",
      descBullets: [
        "Enhanced scalable REST APIs with Java Spring Boot, integrating payment and shipping services for 50% faster order processing and efficient database management with Spring Data JPA.",
        "Implemented OAuth2.0 client and validator to generate JWT tokens, validate and verify their signatures using public key stored in Kubernetes secrets, and managed the public keys using a watcher."
      ]
    }
  ]
};


const openSource = {
  showGithubProfile: "true",
  display: true 
};


const bigProjects = {
  title: "Projects",
  subtitle: "THESE ARE SOME OF MY PROJECT'S, BUILD DURING MY CAREER",
  projects: [   
  ],
  display: false 
};


const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
  ],
  display: false 
};



const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.",
  email_address: "kiranunnikrishnan07@gmail.com"
};


export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo
};
