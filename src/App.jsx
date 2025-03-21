import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import allData from "./components/assets/Companies.json";
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Header allData={allData} />
        </header>
        <Routes>
          <Route path="/revisor/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
