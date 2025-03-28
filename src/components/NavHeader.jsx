import genericLogo from "/images/generic-logo.png";
import "../styles/NavHeader.css";
import { useNavigate } from "react-router-dom";
import data from "../assets/Companies.json";
import { useContext, useState } from "react";
import { Context } from "./ContextWindow";
import { clipArea } from "chart.js/helpers";

function NavHeader() {
  const navigate = useNavigate();
  const { company, setCompany } = useContext(Context);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState();

  function searchfield(query) {
    return data.filter((obj) => obj.CompanyName.toLowerCase().includes(query));
  }
  function clearstuff() {
    setQuery("");
    setFilteredData("");
  }

  return (
    <>
      <nav id="nav">
        <div id="navheader-logo">
          <img
            src={genericLogo}
            alt="generic company logo"
            onClick={() => {
              navigate("/revisor");
              clearstuff("");
            }}
          />
        </div>
        <input
          id="company-search"
          type="text"
          placeholder="search for Company Name"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value.toLowerCase());
            setFilteredData(searchfield(query));
            console.log(filteredData);
          }}
        />
        <button
          id="company-list-btn"
          onClick={() => {
            navigate("/companylist");
            clearstuff();
          }}
        >
          Company List
        </button>
      </nav>
      <ul>
        {filteredData && (
          <>
            <p id="search-p">Search Results:</p>
            <ul id="search-container">
              {filteredData.map((data, id) => (
                <li
                  className="list-search"
                  key={id}
                  onClick={() => {
                    setCompany(data);
                    navigate("/company");
                    clearstuff();
                  }}
                >
                  {data.CompanyName} <br />
                  org.nr: {data.OrganisationNumber}
                </li>
              ))}
            </ul>
          </>
        )}
      </ul>
    </>
  );
}
export default NavHeader;
