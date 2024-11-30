import React from 'react'

const Informaion= () => {
  return (
    <div className="about__info gri">
        <div className="about__box">
            <i className="bx bx-award about__icon"></i>

            <h3 className="about__title">Student</h3>
            <span className="about__subtitle">Fresher</span>
        </div>

        <div className="about__box">
            <i className="bx bx-briefcase-alt about__icon"></i>
            <h3 className="about__title">completed</h3>
            <span className="about__subtitle">3+ projects</span>
        </div>
    </div>
  )
}

export default Informaion