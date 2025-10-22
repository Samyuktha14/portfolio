import React, { useEffect } from 'react';
import './scrollup.css';

const Scrollup = () => {
  useEffect(() => {
    const scrollUp = () => {
      const scrollElement = document.querySelector(".scrollup");
      if (window.scrollY >= 560) scrollElement.classList.add("show-scroll");
      else scrollElement.classList.remove("show-scroll");
    };

    window.addEventListener("scroll", scrollUp);
    return () => window.removeEventListener("scroll", scrollUp);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="scrollup" onClick={handleClick} aria-label="Scroll to top">
      <i className="uil uil-arrow-up scrollup_icon"></i>
    </button>
  );
};

export default Scrollup;
