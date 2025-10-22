import React, { useState } from "react";
import "./contact.css";

// Simple HTML escape to prevent XSS
const escapeHtml = (str = "") =>
  String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

// Strip all HTML tags from input
const sanitizeInput = (str = "") => str.replace(/<[^>]*>?/gm, "");

const Contact = () => {
  const [formStatus, setFormStatus] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "error"
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const name = escapeHtml(sanitizeInput(form.name.value.trim()));
    const email = escapeHtml(sanitizeInput(form.email.value.trim()));
    const message = escapeHtml(sanitizeInput(form.message.value.trim()));

    if (!name || !email || !message) {
      setFormStatus("All fields are required.");
      setStatusType("error");
      setIsSubmitting(false);
      setTimeout(() => setFormStatus(""), 5000);
      return;
    }

    if (!validateEmail(email)) {
      setFormStatus("Please enter a valid email.");
      setStatusType("error");
      setIsSubmitting(false);
      setTimeout(() => setFormStatus(""), 5000);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/manpzvyo", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormStatus("Message sent successfully!");
        setStatusType("success");
        form.reset();
      } else {
        setFormStatus("Oops! Something went wrong.");
        setStatusType("error");
      }
    } catch {
      setFormStatus("Oops! Something went wrong.");
      setStatusType("error");
    }

    setIsSubmitting(false);
    setTimeout(() => setFormStatus(""), 5000);
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in Touch</h2>

      <form className="contact__form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          autoComplete="name" 
          className="contact__input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          autoComplete="email"
          className="contact__input"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          autoComplete="off"  
          className="contact__input"
        ></textarea>

        <button
          type="submit"
          className="button button--flex"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {formStatus && (
          <p className={`form__status ${statusType}`}>{formStatus}</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
