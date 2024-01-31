import AlignedJumbotron from "../UI/AlignedJumbotron";
import ClassicJumbotron from "../UI/ClassicJumbotron";
import Header from "../UI/Header";
import { useState } from "react";
import Modal from "../UI/Modal";
import Footer from "../UI/Footer";
import Input from "../UI/Input";

export default function Main() {
  const [isSignInVisible, setSignInVisibility] = useState(false);

  const handleSignInClick = () => {
    setSignInVisibility(true);
  };
  return (
    <div class="container py-4">
      <Header onSignInClick={handleSignInClick}></Header>
      <ClassicJumbotron></ClassicJumbotron>
      <AlignedJumbotron></AlignedJumbotron>
      <Footer></Footer>

      {isSignInVisible && (
        <Modal onClose={() => setSignInVisibility(false)} title="Sign in">
          <form class="">
            <Input
              type="Email address"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <Input
              type="Password"
              id="floatingPassword"
              placeholder="Password"
            />
            <button
              class="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
              type="submit"
            >
              {"Sign in"}
            </button>
            <button
              class="w-100 mb-2 btn btn-lg rounded-3 btn-outline-primary"
              type="submit"
            >
              {"Sign up"}
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
}
