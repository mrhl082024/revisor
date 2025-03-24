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
                <p>Company ID: {data.CompanyID}</p>
                <p>Org.nr: {data.OrganisationNumber} </p>
                <p>Current Employees: {data.CurrentEmployees} </p>
              </section>
              <section>
                Registered Address:
                <ul>
                  <li>City: {data.RegisteredAddress.City} </li>
                  <li>Country: {data.RegisteredAddress.Country} </li>
                  <li>Street Name:{data.RegisteredAddress.StreetName} </li>
                  <li>Street Number:{data.RegisteredAddress.StreetNumber} </li>
                  <li>Postal Code: {data.RegisteredAddress.PostalCode} </li>
                </ul>
              </section>
            </div>
          ))}
    </>
  );
};
export default BasicInfo;
