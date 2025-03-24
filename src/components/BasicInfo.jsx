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
            <div key={id} id="basicinfo">
              <section>
                <h1>{data.CompanyName} </h1>
              </section>
              <section>
                <p>Company ID: {data.CompanyID}</p>
                <p>Org.nr: {data.OrganisationNumber} </p>
                <p>Current Employees: {data.CurrentEmployees} </p>
              </section>
              <section>
                <p>{data.RegisteredAddress.City} </p>
                <p>{data.RegisteredAddress.Country} </p>
                <p>{data.RegisteredAddress.StreetName} </p>
                <p>{data.RegisteredAddress.StreetNumber} </p>
                <p>{data.RegisteredAddress.PostalCode} </p>
              </section>
            </div>
          ))}
    </>
  );
};
export default BasicInfo;
