import { useContext, useState } from "react";
import { Context } from "./ContextWindow";
import { Bar, Chart } from "react-chartjs-2";
import * as ChartJS from "chart.js/auto";

import rangeData from "../assets/NS4102Range.json";
import data from "../assets/Companies.json";

function AdvancedInfo() {
  const { company, setCompany } = useContext(Context);
  const [value, setValue] = useState();

  const arr = [];
  function validArr(keyCode) {
    validArr.length = 0;
    data.map((data) => data.Code === code && validArr.push(data));
  }
  const keyValueArr = [];
  for (const [code, name] of Object.entries(rangeData)) {
    keyValueArr.push({ code, name });
  }
  console.log(company.FiscData.filter((data) => data.Code === value));
  const chartData = company.FiscData.filter((data) => data.Code === value);
  console.log(
    chartData.map((data) => {
      return {
        x: data.Year,
        y: data.Value,
      };
    })
  );

  return (
    <>
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
      <Chart
        data={{
          label: "test",
          datasets: [
            {
              type: "line",
              label: "Value",
              data: chartData.map((data) => {
                return {
                  x: String(data.Year),
                  y: data.Value,
                };
              }),
            },
          ],
        }}
      />
    </>
  );
}
export default AdvancedInfo;
