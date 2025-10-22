import React from 'react'

const Informaion= () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className="bx bx-award about__icon"></i>

            <h3 className="about__title">Fresher</h3>
            <span className="about__subtitle">B.E. in CSE,2025</span>
        </div>

        <div className="about__box">
            <i className="bx bx-briefcase-alt about__icon"></i>
            <h3 className="about__title">completed</h3>
            <span className="about__subtitle">4+ projects</span>
        </div>
    </div>
  )
}

export default Informaion