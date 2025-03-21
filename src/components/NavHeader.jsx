import genericLogo from "/images/generic-logo.png";

function NavHeader() {
  return (
    <>
      <div>
        <img id="navheader-logo" src={genericLogo} alt="" />
      </div>
      <input
        id="company-search"
        type="text"
        placeholder="search for name or org.nr"
      />
    </>
  );
}
export default NavHeader;
