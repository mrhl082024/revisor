import genericLogo from "/images/generic-logo.png";
import "../styles/NavHeader.css";
import { useNavigate } from "react-router-dom";
import data from "../assets/Companies.json";
import { useContext } from "react";
import { Context } from "./ContextWindow";

function NavHeader() {
  const navigate = useNavigate();
  const { company, setCompany } = useContext(Context);
  console.log(data);

  return (
    <>
      <nav id="nav">
        <div id="navheader-logo">
          <img
            src={genericLogo}
            alt="generic company logo"
            onClick={() => {
              navigate("/revisor");
            }}
          />
        </div>
        <input
          id="company-search"
          type="text"
          placeholder="search for name or org.nr"
        />
        <button
          id="company-list-btn"
          onClick={() => {
            navigate("/companylist");
          }}
        >
          Company List
        </button>
      </nav>
    </>
  );
}
export default NavHeader;
