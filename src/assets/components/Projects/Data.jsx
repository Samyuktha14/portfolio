import Work1 from "../../images/work1.jpg";
import BookImg from '../../images/book.png';
import PortfolioImg from '../../images/portfolio.png';
import DBPImg from '../../images/dbp.png';

export const projectsData = [
  {
    id: 1,
    image: PortfolioImg,
    title: "Portfolio",
    category: "Frontend",
    demo: "https://samyuktha14.github.io/portfolio/",
    code: "https://github.com/Samyuktha14/portfolio",
  },
  {
    id: 2,
    image: DBPImg,
    title: "Diabetes Prediction",
    category: "Machine Learning", 
    demo:"https://samyuktha14-diabetes-prediction-system-app-fmwob7.streamlit.app/",
    code: "https://github.com/Samyuktha14/diabetes-prediction-system",
  },
  {
    id: 3,
    image: BookImg,
    title: "Online Book Store",
    category: "MERN Stack", 
    demo: "", // Coming soon
    code: "https://github.com/Samyuktha14/book-store-mern",
  },
  {
    id: 4,
    image: Work1,
    title: "Job Tracker",
    category: "Spring Boot", 
    demo: "", // Coming soon
    code: "https://github.com/Samyuktha14/job-tracker",
  },
];

export const projectsNav = [
  { name: "All" },
  { name: "Frontend" },
  { name: "Machine Learning" },
  { name: "MERN Stack" },
  { name: "Spring Boot" },
];
