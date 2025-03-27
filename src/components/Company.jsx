import BasicInfo from "./BasicInfo.jsx";
import AdvancedInfo from "./AdvancedInfo.jsx";
import Footer from "./Footer.jsx";

import "../styles/Company.css";
function Company() {
  return (
    <>
      <div id="company">
        <BasicInfo />
        <AdvancedInfo />
      </div>
      <Footer />
    </>
  );
}
export default Company;
