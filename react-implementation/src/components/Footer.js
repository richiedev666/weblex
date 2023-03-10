import { useState } from "react";

import { Link } from "react-router-dom";

import { address, phoneNumber, socials } from "../data";

import "../styles/components/_footer.scss";

export default function FooterComponent() {
  const [footerSections] = useState([
    {
      title: "О компании",
      items: [
        [
          {
            title: "Партнёрская программа",
            link: "/partnership",
          },
          {
            title: "Вакансии",
            link: "/vacancies",
          },
        ],
      ],
    },
    {
      title: "Меню",
      items: [
        [
          {
            title: "Расчёт стоимости",
            link: "/calculate",
          },
          {
            title: "Услуги",
            link: "/services",
          },
          {
            title: "Виджеты",
            link: "/widgets",
          },
          {
            title: "Интеграции",
            link: "/integrations",
          },
          {
            title: "Наши клиенты",
            link: "/clients",
          },
        ],
        [
          {
            title: "Кейсы",
            link: "/cases",
          },
          {
            title: "Благодарственные письма",
            link: "/news",
          },
          {
            title: "Сертификаты",
            link: "/certificates",
          },
          {
            title: "Блог на Youtube",
            link: "/blog",
          },
          {
            title: "Вопрос / Ответ",
            link: "/questions",
          },
        ],
      ],
    },
  ]);

  return (
    <div
      className="footer__wrapper"
      data-aos="fade-up"
      data-aos-delay="2000"
      data-aos-duration="1000"
    >
      <div className="container">
        <div className="footer">
          {footerSections.map((section) => (
            <div key={section.title} className="footer__section">
              <h3 className="footer__section__title">{section.title}</h3>
              <nav className="footer__section__items__wrapper">
                <ul className="footer__section__items">
                  {section.items.map((items, index) => (
                    <div
                      key={`section-${index}`}
                      className="footer__section__items__block"
                    >
                      {items.map((item) => (
                        <li
                          key={item.title}
                          className="footer__section__items__block__item"
                        >
                          <Link to={item.link}>{item.title}</Link>
                        </li>
                      ))}
                    </div>
                  ))}
                </ul>
              </nav>
            </div>
          ))}

          <div className="footer__section">
            <h3 className="footer__section__title">Контакты</h3>

            <p className="footer__section__phone">
              <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
            </p>

            <div className="footer__socials">
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

            <p className="footer__section">{address}</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer__bottom">
          <p>©WELBEX 2022. Все права защищены.</p>
          <p>
            <Link to="">Политика конфиденциальности</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
