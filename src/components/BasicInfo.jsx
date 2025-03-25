import { useContext, useState } from "react";
import { Context } from "./ContextWindow";

import "../styles/BasicInfo.css";

const BasicInfo = () => {
  const { company, setCompany } = useContext(Context);
  const [showAddress, setShowAddress] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showBoardMembers, setShowBoardMembers] = useState(false);
  const [showIndustryCodes, setShowIndustryCodes] = useState(false);
  const [showTaxReg, setShowTaxReg] = useState(false);
  console.log(company);

  return (
    <div id="basicinfo">
      {company === null || company === undefined ? null : (
        <div>
          <section>
            <h1>{company.CompanyName} </h1>
            <ul>
              <li>Company ID: {company.CompanyID}</li>
              <li>Org.nr: {company.OrganisationNumber}</li>
              <li>Current Employees: {company.CurrentEmployees}</li>
              <li>Registered Date: {company.RegisteredDate}</li>
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
                <li>City: {company.RegisteredAddress.City} </li>
                <li>Country: {company.RegisteredAddress.Country} </li>
                <li>Street Name: {company.RegisteredAddress.StreetName} </li>
                <li>Street Number: {company.RegisteredAddress.StreetNumber}</li>
                <li>Postal Code: {company.RegisteredAddress.PostalCode} </li>
              </ul>
            ) : null}
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
                <li>Contact Info Id: {company.ContactInfo.ContactInfoId}</li>
                <li>Email: {company.ContactInfo.Email}</li>
                <li>Phone: {company.ContactInfo.Phone} </li>
                <li>
                  <a href={company.ContactInfo.WebsiteUrl} target="_blank">
                    {company.ContactInfo.WebsiteUrl}
                  </a>
                </li>
              </ul>
            ) : null}
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
                {company.BoardMembers.map((boardmembers, id) => (
                  <div key={id}>
                    <p>Member {id + 1} </p>
                    <li>Name: {boardmembers.Name} </li>
                    <li>Board Member ID: {boardmembers.BoardMemberId} </li>
                    <li>Since :{boardmembers.Since} </li>
                  </div>
                ))}
              </ul>
            ) : null}
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
                {company.IndustryCodes.map((industryCodes, id) => (
                  <div key={id}>
                    <li>Industry Code: {industryCodes.IndustryCode} </li>
                    <li>Industry Code ID: {industryCodes.IndustryCodeId} </li>
                    <li>
                      Primary: {industryCodes.Primary ? "True" : "False"}{" "}
                    </li>
                  </div>
                ))}
              </ul>
            ) : null}
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
                <li>Last Audit Year: {company.TaxReg.LastAuditYear} </li>
                <li>
                  Need Audit: {company.TaxReg.NeedAudit ? "True" : "False"}{" "}
                </li>
                <li>TaxReg ID: {company.TaxReg.TaxRegID} </li>
                <li>
                  Vat Registered:{" "}
                  {company.TaxReg.VatRegistered ? "True" : "False"}{" "}
                </li>
              </ul>
            ) : null}
          </section>
        </div>
      )}
    </div>
  );
};
export default BasicInfo;
