import { useContext, useState } from "react";
import { Context } from "./ContextWindow";

const BasicInfo = () => {
  const { company, setCompany } = useContext(Context);
  const [showAddress, setShowAddress] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showBoardMembers, setShowBoardMembers] = useState(false);
  const [showIndustryCodes, setShowIndustryCodes] = useState(false);
  const [showTaxReg, setShowTaxReg] = useState(false);
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
              <section>
                <button
                  onClick={() => {
                    setShowBoardMembers((e) => !e);
                  }}
                >
                  Board Members:
                </button>
                {showBoardMembers ? (
                  <ul>
                    {data.BoardMembers.map((boardmembers, id) => (
                      <div key={id}>
                        <p>Member {id + 1} </p>
                        <li>Name: {boardmembers.Name} </li>
                        <li>Board Member ID: {boardmembers.BoardMemberId} </li>
                        <li>Since :{boardmembers.Since} </li>
                      </div>
                    ))}
                  </ul>
                ) : (
                  false
                )}
              </section>
              <section>
                <button
                  onClick={() => {
                    setShowIndustryCodes((e) => !e);
                  }}
                >
                  Industry Codes:
                </button>
                {showIndustryCodes ? (
                  <ul>
                    {data.IndustryCodes.map((industryCodes, id) => (
                      <div key={id}>
                        <li>Industry Code: {industryCodes.IndustryCode} </li>
                        <li>
                          Industry Code ID: {industryCodes.IndustryCodeId}{" "}
                        </li>
                        <li>
                          Primary: {industryCodes.Primary ? "True" : "False"}{" "}
                        </li>
                      </div>
                    ))}
                  </ul>
                ) : (
                  false
                )}
              </section>
              <section>
                <button
                  onClick={() => {
                    setShowTaxReg((e) => !e);
                  }}
                >
                  TaxReg:
                </button>
                {showTaxReg ? (
                  <ul>
                    <li>Last Audit Year: {data.TaxReg.LastAuditYear} </li>
                    <li>
                      Need Audit: {data.TaxReg.NeedAudit ? "True" : "False"}{" "}
                    </li>
                    <li>TaxReg ID: {data.TaxReg.TaxRegID} </li>
                    <li>
                      Vat Registered:{" "}
                      {data.TaxReg.VatRegistered ? "True" : "False"}{" "}
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
