import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo_welbex.svg";
import { telegram, whatsapp, viber } from "../icons";

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

  const [headerSocials] = useState([
    {
      icon: telegram,
      link: "https://t.me/richiedev",
    },
    {
      icon: viber,
      link: "/viber",
    },
    {
      icon: whatsapp,
      link: "/whatsapp",
    },
  ]);

  return (
    <div className="header__wrapper">
      <div className="container">
        <div className="header">
          <div className="header__logo">
            <img src={logo} alt="" />

            <p className="header__logo__text">
              крупный интегратор CRM в Росcии и ещё 8 странах
            </p>
          </div>

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
            <p>+7 555 555-55-55</p>
          </div>

          <div className="header__socials">
            {headerSocials.map((item, index) => (
              <a
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
