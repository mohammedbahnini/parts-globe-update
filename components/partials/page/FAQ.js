import React from "react";
import BreadCrumb from "../../elements/BreadCrumb";

const FAQ = (props) => {
  const breadcrumb = [
    {
      text: "Accueil",
      url: "/",
    },
    {
      text: "Pour les clients",
    },
    {
      text: "FAQs",
      url: "/faqs",
    },
  ];

  const items = [
    {
      title: "Paiment",
      icon: "fa fa-credit-card",
      links: [
        {
          text: "Options de paiment",
          url: "/",
        },
        {
          text: "Comment payer une commande",
          url: "/",
        },
      ],
    },
    {
      title: "Rechange",
      icon: "fa fa-wrench",
      links: [
        {
          text: "Comment rechercher une pièce",
          url: "/",
        },
        {
          text: "Quoi choisir",
          url: "/",
        },
      ],
    },
    {
      title: "Garantie",
      icon: "fa fa-shield",
      links: [
        {
          text: "Garantie et retour",
          url: "/",
        },
      ],
    },
    {
      title: "Adresses",
      icon: "fa fa-map-marker",
      links: [
        {
          text: "Liste des adresses",
          url: "/",
        },
      ],
    },
    {
      title: "A props de nous",
      icon: "fa fa-building",
      links: [
        {
          text: "Franchise",
          url: "/franchise",
        },
        {
          text: "Qui somme nous",
          url: "/about",
        },
        {
          text: "Partenaire",
          url: "/",
        },
      ],
    },
    {
      title: "Informations",
      icon: "fa fa-info-circle",
      links: [
        {
          text: "Accord personnalisé",
          url: "/",
        },
        {
          text: "Confidentialité",
          url: "/",
        },
        {
          text: "Donnés personnelles",
          url: "/",
        },
      ],
    },
  ];

  return (
    <React.Fragment>
      <BreadCrumb breacrumb={breadcrumb} />
      <div className="ps-section--custom">
        <div className="container">
          <h1>FAQs</h1>
          <div className="faqs">
            {items.map((item) => {
              return (
                <div className="" key={item}>
                  <div className="faq-section">
                    <div className="faq-header">
                      <h3>{item.title}</h3>
                      <span className="faq-logo">
                        <i className={item.icon} aria-hidden="true"></i>
                      </span>
                    </div>

                    <div className="faq-content">
                      <ul>
                        {item.links.map((link) => {
                          return (
                            <li key={link.text}>
                              <a href="#">{link.text}</a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FAQ;
