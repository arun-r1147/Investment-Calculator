import { FC ,useState} from "react";
import { UserInput } from "./UserInput.component";
import { Logs } from "./logs.component";

export const Logic: FC = () => {

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
      <UserInput onChange={onChangeHandler} value={inputValues} />
      {!isValidInput && (
        <p className="center">Please enter duration greater than zero</p>
      )}
      {isValidInput && <Logs inputValues={inputValues} />}
    </>
  );
};
