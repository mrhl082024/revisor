import { useContext, useState } from "react";
import { Context } from "./ContextWindow";
import rangeData from "../assets/NS4102Range.json";

function AdvancedInfo() {
  const { company, setCompany } = useContext(Context);
  console.log(company);

  return (
    <>
      {company.map((data, id) => (
        <div>
          {data.FiscData.map((entry)=> <div>
            <div/>)}
        </div>
      ))}
    </>
  )
}
export default AdvancedInfo;
