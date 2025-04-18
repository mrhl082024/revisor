import { useContext, useState } from "react";
import { Context } from "./ContextWindow";
import { Bar, Doughnut } from "react-chartjs-2";
import * as ChartJS from "chart.js/auto";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";

import "../styles/AdvancedInfo.css";

import rangeData from "../assets/NS4102Range.json";
import data from "../assets/Companies.json";

ChartJs.register(ArcElement, Tooltip, Legend);

function AdvancedInfo() {
  const { company, setCompany } = useContext(Context);
  const [value, setValue] = useState();
  const [graphType, setGraphType] = useState("bar");

  const graphTypes = ["bar", "bubble", "line"];

  const shareholderValues = [];
  company.OwnerShareholders.map((data) =>
    shareholderValues.push(data.SharePercentage)
  );

  const shareholderNames = [];
  company.OwnerShareholders.map((name) => shareholderNames.push(name.Name));
  console.log(shareholderNames);

  const keyValueArr = [];
  for (const [code, name] of Object.entries(rangeData)) {
    keyValueArr.push({ code, name });
  }

  console.log(company);

  return (
    <>
      <div id="advancedinfo">
        <section id="advanced-selects">
          <select
            name="type"
            id="type"
            onChange={(e) => {
              setGraphType(e.target.value);
            }}
          >
            {graphTypes.map((graphTypes, id) => (
              <option key={id} value={graphTypes}>
                {graphTypes}
              </option>
            ))}
          </select>
          <select
            onChange={(e) => {
              setValue(e.target.value);
            }}
            name="code"
            id="code"
          >
            <option selected="selected" disabled hidden>
              Choose code
            </option>
            {keyValueArr.map((entry, id) => (
              <option key={id} value={entry.code}>
                {entry.name}
              </option>
            ))}
          </select>
        </section>
        <figure id="graph">
          <Bar
            data={{
              datasets: [
                {
                  type: graphType,
                  label: "Value",
                  data: company.FiscData.filter(
                    (data) => data.Code === value
                  ).map((data) => {
                    return {
                      x: String(data.Year),
                      y: data.Value,
                    };
                  }),
                },
              ],
            }}
          />
        </figure>
        <figure id="shareholder-graph">
          <Doughnut
            data={{
              labels: company.OwnerShareholders.map((name) => name.Name),
              datasets: [
                {
                  label: "Shareholder Percentage",
                  type: "doughnut",
                  data: company.OwnerShareholders.map(
                    (shareholder) => shareholder.SharePercentage
                  ),
                  hoverOffset: 4,
                },
              ],
            }}
            options={{}}
          />
        </figure>
      </div>
    </>
  );
}
//Just a reminder that without my Furfag<3 this project wouldn't exist.
export default AdvancedInfo;
