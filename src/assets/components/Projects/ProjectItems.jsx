import React from 'react';

const ProjectItems = ({ item }) => {
  return (
    <div className='project__card'>
      <img src={item.image} alt={item.title} className="project__img" loading="lazy" />
      <h3 className="project__title">{item.title}</h3>

      <div className="project__links">
        {item.demo ? (
          <a
            href={item.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project__button"
          >
            Demo <i className="bx bx-right-arrow-alt project__button-icon"></i>
          </a>
        ) : (
          <span className="project__button project__button--disabled">
            Coming Soon
          </span>
        )}

        <a
          href={item.code}
          target="_blank"
          rel="noopener noreferrer"
          className="project__button"
        >
          Code <i className="bx bx-code-alt project__button-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectItems;
