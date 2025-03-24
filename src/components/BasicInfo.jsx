import { useContext, useState } from "react";
import { Context } from "./ContextWindow";

const BasicInfo = () => {
  const { company, setCompany } = useContext(Context);
  const [showAddress, setShowAddress] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);
  console.log(company);

  return (
    <>
      {company === null || company === undefined
        ? null
        : company.map((data, id) => (
            <div key={id} id="basicinfo">
              <section>
                <h1>{data.CompanyName} </h1>
                <ul>
                  <li>Company ID: {data.CompanyID}</li>
                  <li>Org.nr: {data.OrganisationNumber}</li>
                  <li>Current Employees: {data.CurrentEmployees}</li>
                  <li>Registered Date: {data.RegisteredDate}</li>
                </ul>
              </section>
              <section>
                <button
                  onClick={() => {
                    setShowAddress((e) => !e);
                  }}
                >
                  Address:
                </button>
                {showAddress ? (
                  <ul>
                    <li>City: {data.RegisteredAddress.City} </li>
                    <li>Country: {data.RegisteredAddress.Country} </li>
                    <li>Street Name: {data.RegisteredAddress.StreetName} </li>
                    <li>
                      Street Number: {data.RegisteredAddress.StreetNumber}{" "}
                    </li>
                    <li>Postal Code: {data.RegisteredAddress.PostalCode} </li>
                  </ul>
                ) : (
                  false
                )}
              </section>
              <section>
                <button
                  onClick={() => {
                    setShowContactInfo((e) => !e);
                  }}
                >
                  Contact Info:
                </button>
                {showContactInfo ? (
                  <ul>
                    <li>Contact Info Id: {data.ContactInfo.ContactInfoId}</li>
                    <li>Email: {data.ContactInfo.Email}</li>
                    <li>Phone: {data.ContactInfo.Phone} </li>
                    <li>
                      <a href={data.ContactInfo.WebsiteUrl} target="_blank">
                        {data.ContactInfo.WebsiteUrl}
                      </a>
                    </li>
                  </ul>
                ) : (
                  false
                )}
              </section>
            </div>
          ))}
    </>
  );
};
export default BasicInfo;
