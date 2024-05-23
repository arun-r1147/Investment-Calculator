import { FC } from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";
import { LogsProps, Result } from "./types";



const initialInvestment = (data: Result) => {
  return data.valueEndOfYear - data.interest - data.annual;
};

export const Logs: FC<LogsProps> = ({ inputValues }) => {
  const data: Result[] = calculateInvestmentResults(inputValues);
  const initialInvest = initialInvestment(data[0]);

  const calculateInterest = (data: Result) => {
    return data.valueEndOfYear - data.annual * data.year - initialInvest;
  };

  const totalInvest = (data: Result) => {
    return data.valueEndOfYear - calculateInterest(data);
  };

  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest(Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.year} className="center">
            <td>{item.year}</td>
            <td>{formatter.format(item.valueEndOfYear)}</td>
            <td>{formatter.format(item.interest)}</td>
            <td>{formatter.format(calculateInterest(item))}</td>
            <td>{formatter.format(totalInvest(item))}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
