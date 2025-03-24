import { useContext, useState } from "react";
import { Context } from "./ContextWindow";
import rangeData from "../assets/NS4102Range.json";

function AdvancedInfo() {
  const { company, setCompany } = useContext(Context);
  console.log(company);

  return (
    <>
      <p>{company.FiscData[0].Code} </p>
    </>
  );
}
export default AdvancedInfo;
