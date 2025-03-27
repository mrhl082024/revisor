import { useContext } from "react";
import { Context } from "./ContextWindow.jsx";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer.jsx";

import "../styles/CompanyList.css";

import companies from "../assets/Companies.json";

const CompanyList = () => {
  const { company, setCompany } = useContext(Context);

  const navigate = useNavigate();
  return (
    <>
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
