
import { SiLeetcode } from "react-icons/si";

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://www.linkedin.com/in/samyukthaj" className="home__social-icon" target="_blank" rel="noopener noreferrer">
        <i className="uil uil-linkedin-alt"></i>
        </a>

        <a href="https://github.com/Samyuktha14" className="home__social-icon" target="_blank" rel="noopener noreferrer">
            <i className="uil uil-github-alt"></i>
        </a>

        <a href="https://leetcode.com/u/samYU_20/" className="home__social-icon" target="_blank" rel="noopener noreferrer">
          <SiLeetcode size={22} />
          </a>

          <a href="https://www.hackerrank.com/profile/jsamyuktha2004" className="home__social-icon"target="_blank" rel="noopener noreferrer">
            <i className="uil uil-arrow"></i>
          </a>


    </div>
  )
}

export default Social