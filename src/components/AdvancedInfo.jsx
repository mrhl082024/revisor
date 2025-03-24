import { useContext } from "react";
import { Context } from "./ContextWindow";

function AdvancedInfo() {
  const { company, setCompany } = useContext(Context);
  console.log(company);
  return (
    <>
      {company.map((data, id) => (
        <div key={id}>
          <section>
            Board Members:
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
          </section>
        </div>
      ))}
    </>
  );
}
export default AdvancedInfo;
