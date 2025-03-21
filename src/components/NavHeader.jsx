import genericLogo from "/images/generic-logo.png";
import "../styles/NavHeader.css";

function NavHeader() {
  return (
    <>
      <nav id="nav">
        <div id="navheader-logo">
          <img src={genericLogo} alt="" />
        </div>
        <input
          id="company-search"
          type="text"
          placeholder="search for name or org.nr"
        />
      </nav>
    </>
  );
}
export default NavHeader;
