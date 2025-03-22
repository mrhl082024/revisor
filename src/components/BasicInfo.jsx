import { useContext } from "react";
import { Context } from "./ContextWindow";

const BasicInfo = () => {
  const { company, setCompany } = useContext(Context);
  console.log(company);

  return (
    <>
      {company === null || company === undefined
        ? null
        : company.map((data, id) => (
            <>
              <h1>{data.CompanyName} </h1>
              <p>{data.CompanyID}</p>
              <p>{data.OrganisationNumber} </p>
            </>
          ))}
    </>
  );
};
export default BasicInfo;
