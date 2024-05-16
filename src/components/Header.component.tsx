import { FC } from "react";
import logo from '../assets/investment-calculator-logo.png'

export const Header: FC = () => {
  return (
    <header id="header">
        <img src={logo} alt="App logo" />
      <h2>Investment Calculator</h2>
    </header>
  );
};
