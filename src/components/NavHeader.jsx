import genericLogo from "/images/generic-logo.png";
import "../styles/NavHeader.css";
import { useNavigate } from "react-router-dom";

function NavHeader() {
  const navigate = useNavigate();
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
