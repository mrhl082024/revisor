import { useContext } from "react";
import { Context } from "./ContextWindow.jsx";
import companies from "../assets/Companies.json";
import "../styles/CompanyList.css";
import { useNavigate } from "react-router-dom";

function CompanyList() {
  const navigate = useNavigate();
  return (
    <>
      <div id="company-list">
        {companies.map((entry, id) => (
          <button
            key={id}
            onClick={() => {
              navigate("/company");
            }}
          >
            {entry.CompanyName}
          </button>
        ))}
      </div>
    </>
  );
}
export default CompanyList;
