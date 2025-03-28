import { useContext, useEffect, useState } from "react";
import { Context } from "./ContextWindow.jsx";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer.jsx";

import "../styles/CompanyList.css";

import companies from "../assets/Companies.json";

const CompanyList = () => {
  const { company, setCompany } = useContext(Context);

  const [pageCounter, setPageCounter] = useState(1);
  const [listSize, setListSize] = useState(10);
  const [listedCompanies, setListedCompanies] = useState(
    companies.slice(0, 10)
  );
  console.log(listedCompanies);
  const step = pageCounter * listSize;
  function pageDecrement() {
    if (pageCounter === 1) return;
    setPageCounter(pageCounter - 1);
    setListedCompanies(companies.slice(step, step + listSize));
  }
  function pageIncrement() {
    if (pageCounter >= companies.length / listSize) return;
    setPageCounter(pageCounter + 1);
    setListedCompanies(companies.slice(step, step + listSize));
  }

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
