import React from 'react';
import '../styles/Home.css'; // Обновленный путь
import profileImage from '../assets/profile.jpg';

function Home() {
  return (
    <section id="home" className="home">
        <img src={profileImage} alt="My Profile" className="profile-image" />
        <img src="assets/ivan.jpg" alt="" />
      
      <div className="intro">
        <h1>Ivan Bedin</h1>
        <p>IT Specialist -  Developer - PC Enthusiast</p>
      </div>
    </section>
  );
}

export default Home;
