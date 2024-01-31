import React from "react";
import mainlogo from "../Assets/images/logo.png";

const Footer = () => {
  return (
    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p class="col-md-4 mb-0 text-body-secondary">© 2024 Purify</p>

        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item">
            <a href="#!" class="nav-link px-2 text-body-secondary">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="#!" class="nav-link px-2 text-body-secondary">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a href="#!" class="nav-link px-2 text-body-secondary">
              Pricing
            </a>
          </li>
          <li class="nav-item">
            <a href="#!" class="nav-link px-2 text-body-secondary">
              FAQs
            </a>
          </li>
          <li class="nav-item">
            <a href="#!" class="nav-link px-2 text-body-secondary">
              About
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
