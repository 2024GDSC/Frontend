import React from "react";
import mainlogo from "../../Assets/images/logo.png";
import SignupInput from "../../UI/SignupInput";

export default function Signup() {
  return (
    <div class="container">
      <div class="py-4 text-center ">
        <a href="/">
          <img
            class="d-block mx-auto mb-4"
            src={mainlogo}
            alt="Purify Logo"
            width="200"
            height="72.2"
          />
        </a>
        <h2 class="mb-3">Sign up form</h2>
      </div>

      <div className="d-flex justify-content-center">
        <div class="col-md-12 col-lg-8">
          <form class="needs-validation" novalidate="">
            <div class="row g-3">
              <SignupInput
                label="First name"
                id="firstName"
                type="firstName"
                placeholder=""
                required=""
                feedback="Valid first name is required."
              />

              <SignupInput
                label="Last name"
                id="lastName"
                type="lastName"
                placeholder=""
                required=""
                feedback="Valid last name is required."
              />

              <SignupInput
                label="Email"
                id="email"
                type="email"
                placeholder="Email address"
                required=""
                feedback="Your email address is required."
              />

              <SignupInput
                label="Password"
                id="password"
                type="password"
                placeholder=""
                required=""
                feedback="Valid password is required."
              />

              <SignupInput
                label="Address"
                id="address"
                type="text"
                placeholder="1234 Main St"
                required=""
                feedback="Please enter your shipping address."
              />

              <SignupInput
                label="Address 2"
                id="address2"
                type="text"
                placeholder="Apartment or suite"
                required=""
                feedback=""
              />
            </div>

            <hr class="my-4" />

            <button class="w-100 btn btn-primary btn-lg" type="submit">
              Continue to sign up
            </button>
          </form>
        </div>
      </div>

      <footer class="my-5 pt-2 text-body-secondary text-center text-small">
        <p class="mb-1">© 2023-2024 Purify</p>
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="#!">Privacy</a>
          </li>
          <li class="list-inline-item">
            <a href="#!">Terms</a>
          </li>
          <li class="list-inline-item">
            <a href="#!">Support</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
