import React from 'react';

import './Contact.css';

const Contact = () => {
  return (
    <section id="Contact" className="section-container-flex contact-section">
      <div>
        <p className="section-title">Get In Touch</p>
        <h2 className="section-heading">Contact Me</h2>
        <p className="text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.
        </p>
      </div>
      <form className="contact__form-container">
        <div className="contact__first-block-container">
          <label htmlFor="first-name" className="contact__label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact__input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact__label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact__input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact__label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact__input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact__label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact__input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact__label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" className="contact__input text-md">
            <option>Select One...</option>
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </select>
        </label>
        <label htmlFor="message" className="contact__label">
          <span className="text-md">Message</span>
          <textarea
            className="contact__input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkboc" className="checkbox__label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn--primary contact__form-btn">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;