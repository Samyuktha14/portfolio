import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in Touch</h2>
       

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Contact Me</h3>
                <div className="contact__info">
                    <div className="contact__card">
                    <i class='bx bx-mail-send contact__card-icon'></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">jsamyuktha2004@gmail.com</span>

                        <a href="mailto:example@gmail.com" className="contact__button">write me {""}<i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>
                    <div className="contact__card">
                    <i class="uil uil-linkedin-alt contact__card-icon"></i>

                        <h3 className="contact__card-title">LinkedIn</h3>
                        <span className="contact__card-data">Samyuktha</span>

                        <a href="https://www.linkedin.com/in/samyukthaj" className="contact__button">write me {""}<i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact