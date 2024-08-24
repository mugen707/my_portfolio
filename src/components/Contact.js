import React from 'react';
import '../styles/Contact.css'; // Относительный путь к файлу Contact.css

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>Email: <a href="mailto:ivanbedin26@gmail.com">ivanbedin26@gmail.com</a></p>
      <p>Osu: <a href="https://osu.ppy.sh/users/14269959">https://osu.ppy.sh/users/14269959</a></p>
    </section>
  );
}

export default Contact;
