import BasicInfo from "./BasicInfo.jsx";
import AdvancedInfo from "./AdvancedInfo.jsx";

import "../styles/Company.css";
function Company() {
  return (
    <>
      <div id="company">
        <BasicInfo />
        <AdvancedInfo />
      </div>
    </>
  );
}
export default Company;
