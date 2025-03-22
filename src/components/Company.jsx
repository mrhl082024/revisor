import BasicInfo from "./BasicInfo.jsx";
import AdvancedInfo from "./AdvancedInfo.jsx";
import allData from "../assets/Companies.json";
function Company() {
  console.log(allData);

  return (
    <>
      <BasicInfo />
      <AdvancedInfo />
    </>
  );
}
export default Company;
