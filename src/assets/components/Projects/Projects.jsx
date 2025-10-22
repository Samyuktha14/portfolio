import React, { useEffect, useState } from 'react';
import { projectsData, projectsNav } from './Data';
import ProjectItems from './ProjectItems';

const Projects = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'all') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter(
          (project) => project.category.toLowerCase() === item.name
        )
      );
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      <div className="project__filters">
        {projectsNav.map((navItem, index) => (
          <span
            onClick={(e) => handleClick(e, index)}
            className={`${active === index ? 'active-project' : 'project__item'}`}
            key={index}
          >
            {navItem.name}
          </span>
        ))}
      </div>
      <div className="project__container">
        {filteredProjects.map((projectItem) => (
          <ProjectItems item={projectItem} key={projectItem.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
