import { useContext } from "react";
import { Context } from "./ContextWindow.jsx";
import companies from "../assets/Companies.json";
import "../styles/CompanyList.css";

function CompanyList() {
  const data = companies;
  console.log(data);

  return (
    <>
      <div id="company-list">
        {data.map((entry, id) => (
          <button>{entry.CompanyName}</button>
        ))}
      </div>
    </>
  );
}
export default CompanyList;
