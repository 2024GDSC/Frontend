import React from "react";

const Footer = () => {
  const footer = ["Home", "Features", "Pricing", "FAQs", "About"];
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-body-secondary">© 2024 Purify</p>
        <ul className="nav col-md-4 justify-content-end">
          {footer.map((title) => {
            return (
              <li className="nav-item" key={"footer" + title}>
                <a href="#!" className="nav-link px-2 text-body-secondary">
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
