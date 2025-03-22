import { useContext } from "react";
import { Context } from "./ContextWindow";

const BasicInfo = () => {
  const { company, setCompany } = useContext(Context);
  console.log(company);

  return (
    <>
      {company.map((data, id) => (
        <>
          <h1>{data.CompanyName} </h1>
          <p>{data.CompanyId} </p>
          <p>{data.OrganisationNumber} </p>
        </>
      ))}
    </>
  );
};
export default BasicInfo;
