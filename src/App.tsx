import { FC, useState } from "react";
import { Header } from "./components/Header.component";
import { UserInput } from "./components/UserInput.component";
import { Logs } from "./components/logs.component";

export const App: FC = () => {
  const [inputValues, setInputValues] = useState<{
    initial: number;
    annual: number;
    returns: number;
    duration: number;
  }>({ initial: 10000, annual: 1200, returns: 6, duration: 10 });

  const isValidInput = inputValues.duration >= 1;
  const onChangeHandler = (key: string, value: number) => {
    setInputValues((prevValue) => {
      return { ...prevValue, [key]: +value };
    });
  };

  return (
    <>
      <Header />
      <UserInput onChange={onChangeHandler} value={inputValues} />
      {!isValidInput && <p className="center">Please enter duration greater than zero</p>}
      {isValidInput && <Logs inputValues={inputValues} />}
    </>
  );
};
