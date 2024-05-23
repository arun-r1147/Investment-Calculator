export interface UserInputProps {
    value: {
      initial: number;
      annual: number;
      returns: number;
      duration: number;
    };
    onChange: (key: string, value: number) => void;
  }
  export interface LogsProps {
    inputValues: {
      initial: number;
      annual: number;
      returns: number;
      duration: number;
    };
  }
  
  export interface Result {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annual: number;
  }