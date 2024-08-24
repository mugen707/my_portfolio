import React from 'react';
import '../styles/Header.css';
import telegramIcon from '../assets/telegram.png';
import discordIcon from '../assets/discord.png';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="contacts">
        <a href="https://t.me/mugenn1"><img src={telegramIcon} alt="Telegram" className="icon" /></a>
        <a href=" https://discordapp.com/users/951265656823767140/"><img src={discordIcon} alt="Discord" className="icon" /></a>
      </div>
    </header>
  );
}

export default Header;
