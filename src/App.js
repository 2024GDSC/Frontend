import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/main";
import Console from "./pages/console/console";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/console" element={<Console />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
