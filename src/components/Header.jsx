import React from "react";
import "./Header.css";
import logo from "../assets/terabrain-logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="테라브레인" />
      </div>

      <menu className="menu">
        <a href="#" className="Home-link">
          홈
        </a>
        <a href="#" className="CharacterInfo-link">
          캐릭터
        </a>
        <a href="#" className="ItemsInfo-link">
          장비
        </a>
      </menu>

      <button className="login-btn">로그인</button>
    </header>
  );
};

export default Header;
