import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo_welbex.svg";

import { socials, phoneNumber } from "../data";

import "../styles/components/_header.scss";

export default function HeaderComponent() {
  const [headerNavItems] = useState([
    {
      title: "Услуги",
      link: "/services",
    },
    {
      title: "Виджеты",
      link: "/services",
    },
    {
      title: "Интеграции",
      link: "/services",
    },
    {
      title: "Кейсы",
      link: "/services",
    },
    {
      title: "Сертификаты",
      link: "/services",
    },
  ]);

  return (
    <div
      className="header__wrapper"
      data-aos="fade-up"
      data-aos-delay="1400"
      data-aos-duration="750"
    >
      <div className="container">
        <div className="header">
          <Link to="/">
            <div className="header__logo">
              <img src={logo} alt="" />

              <p className="header__logo__text">
                крупный интегратор CRM в Росcии и ещё 8 странах
              </p>
            </div>
          </Link>
          <nav className="header__nav__wrapper">
            <ul className="header__nav">
              {headerNavItems.map((item, index) => (
                <li key={index} className="header__nav__item">
                  <Link to={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__phone">
            <p>
              <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
            </p>
          </div>
          <div className="header__socials">
            {socials.map((item, index) => (
              <a
                key={index}
                className="header__socials__item"
                target="_blank"
                href={item.link}
                rel="noreferrer"
              >
                <img src={item.icon} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
