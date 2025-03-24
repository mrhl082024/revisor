import { useContext, useState } from "react";
import { Context } from "./ContextWindow";

function AdvancedInfo() {
  const { company, setCompany } = useContext(Context);

  console.log(company);

  return (
    <>
      <div>test</div>
    </>
  );
}
export default AdvancedInfo;
