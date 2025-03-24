import { useContext, useState } from "react";
import { Context } from "./ContextWindow";

function AdvancedInfo() {
  const { company, setCompany } = useContext(Context);
  const [show, setShow] = useState(false);

  console.log(company);

  return (
    <>
      {company.map((data, id) => (
        <div key={id}>
          <section>
            <button
              onClick={() => {
                setShow((e) => !e);
              }}
            >
              Show Board Members:
            </button>
            {show ? (
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
            <ul>
              {data.IndustryCodes.map((industryCodes, id) => (
                <div key={id}>
                  <li>Industry Code: {industryCodes.IndustryCode} </li>
                  <li>Industry Code ID: {industryCodes.IndustryCodeId} </li>
                </div>
              ))}
            </ul>
          </section>
        </div>
      ))}
    </>
  );
}
export default AdvancedInfo;
