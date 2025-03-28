import { useContext, useEffect, useState } from "react";
import { Context } from "./ContextWindow.jsx";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer.jsx";

import "../styles/CompanyList.css";

import companies from "../assets/Companies.json";

const CompanyList = () => {
  const { company, setCompany } = useContext(Context);
  const [pageCounter, setPageCounter] = useState(1);
  const [lowCounter, setLowCounter] = useState(0);
  const [highCounter, setHighCounter] = useState(10);
  const [listedCompanies, setListedCompanies] = useState([]);
  console.log(listedCompanies);

  function pageDecrement() {
    if (pageCounter <= 1) {
      setPageCounter(1);
      setLowCounter(0);
      setHighCounter(10);
    } else {
      setLowCounter((prev) => prev - 10);
      setHighCounter((prev) => prev - 10);
      setPageCounter((prev) => prev - 1);
    }
  }
  function pageIncrement() {
    if (pageCounter >= 30) {
      setPageCounter(30);
    } else {
      setPageCounter((prev) => prev + 1);
      setLowCounter((prev) => prev + 10);
      setHighCounter((prev) => prev + 10);
    }
  }
  useEffect(() => {
    setListedCompanies(companies.slice(0, 10));
  }, []);
  useEffect(() => {
    setListedCompanies(companies.slice(lowCounter, highCounter));
  }, [lowCounter]);

  const navigate = useNavigate();
  return (
    <>
      <section id="paginering">
        <button
          onClick={() => {
            pageDecrement();
          }}
        >
          Prev Page
        </button>
        <p id="page-counter">{pageCounter} </p>
        <button onClick={pageIncrement}>Next page</button>
      </section>
      <div id="company-list">
        {listedCompanies.map((entry, id) => (
          <button
            className="company-btn"
            key={id}
            onClick={() => {
              setCompany(entry);
              navigate("/company");
            }}
          >
            {entry.CompanyName}
          </button>
        ))}
      </div>
      <Footer />
    </>
  );
};
export default CompanyList;
