import { useContext, useState } from "react";
import { Context } from "./ContextWindow.jsx";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer.jsx";

import "../styles/CompanyList.css";

import companies from "../assets/Companies.json";

const CompanyList = () => {
  const { company, setCompany } = useContext(Context);
  const [pageCounter, setPageCounter] = useState(1);

  function pageDecrement() {
    if (pageCounter <= 1) {
      setPageCounter(1);
    } else {
      setPageCounter((prev) => prev - 1);
    }
  }
  function pageIncrement() {
    setPageCounter((prev) => prev + 1);
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
        <p>{pageCounter} </p>
        <button onClick={pageIncrement}>Next page</button>
      </section>
      <div id="company-list">
        {companies.map((entry, id) => (
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
