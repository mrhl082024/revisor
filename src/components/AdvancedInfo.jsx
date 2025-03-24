import { useContext, useState } from "react";
import { Context } from "./ContextWindow";

function AdvancedInfo() {
  const { company, setCompany } = useContext(Context);
  const [showBoardMembers, setShowBoardMembers] = useState(false);
  const [showIndustryCodes, setShowIndustryCodes] = useState(false);
  const [showTaxReg, setShowTaxReg] = useState(false);

  console.log(company);

  return (
    <>
      {company.map((data, id) => (
        <div key={id}>
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
                    <li>Industry Code ID: {industryCodes.IndustryCodeId} </li>
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
                <li>Need Audit: {data.TaxReg.NeedAudit ? "True" : "False"} </li>
                <li>TaxReg ID: {data.TaxReg.TaxRegID} </li>
                <li>
                  Vat Registered: {data.TaxReg.VatRegistered ? "True" : "False"}{" "}
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
}
export default AdvancedInfo;
