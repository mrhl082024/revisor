import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/Header.jsx";
import Homepage from "./components/Homepage.jsx";
import ListCompanies from "./components/ListCompanies.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <Routes>
          <Route path="/revisor/" element={<Homepage />} />
          <Route path="/revisor/list-companies" element={<ListCompanies />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
