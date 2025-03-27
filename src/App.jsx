import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/Header.jsx";
import Homepage from "./components/Homepage.jsx";
import CompanyList from "./components/CompanyList.jsx";
import Company from "./components/Company.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <Routes>
          <Route path="/revisor" element={<Homepage />} />
          <Route path="/companylist" element={<CompanyList />} />
          <Route path="/company" element={<Company />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  );
}
export default App;
