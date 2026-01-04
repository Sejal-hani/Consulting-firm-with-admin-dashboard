import React from "react";
import "../../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__wrapper">

          {/* LEFT: Contact form */}
          <div className="contact__content">
            <span className="subtitle">CONTACT</span>
            <h2 className="contact__title">Get in Touch</h2>
            <p className="description">
              We’d love to hear from you. Reach out using the form below or email us at{" "}
              <a href="mailto:growth@infrabyteit.com">growth@infrabyteit.com</a>
            </p>

            <form className="contact__form">
              <div className="form__group two__col">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>

              <div className="form__group">
                <input type="email" placeholder="Your Email" />
              </div>

              <div className="form__group two__col">
                <input type="tel" placeholder="Phone Number" />
                <input type="text" placeholder="Country" />
              </div>

              <div className="form__group">
                <textarea rows="4" placeholder="Your Message"></textarea>
              </div>

              <button className="primary__btn">Send Message</button>
            </form>
          </div>

          {/* RIGHT: Contact info + Apply */}
          <div className="contact__side">

            <div className="contact__info">
              <h4>Contact Information</h4>

              <p>
                <strong>Email</strong><br />
                growth@infrabyteit.com
              </p>

              <p>
                <strong>Phone</strong><br />
                +91 63554 73098
              </p>

              <p>
                <strong>Office Address</strong><br />
                D-609, Prahlad Nagar Trade Centre (PNTC)<br />
                Radio Mirchi Road,<br />
                Satellite, Ahmedabad – 380015
              </p>
            </div>

            <div className="apply__box">
              <h4>Apply With Your CV</h4>

              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Position Applying For" />
              <input type="file" />

              <button className="secondary__btn">Submit Application</button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
