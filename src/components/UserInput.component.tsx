import { FC } from "react";
// import calculationMethod from '../util/investment.js'

interface UserInputProps {
  value: {
    initial: number;
    annual: number;
    returns: number;
    duration: number;
  };
  onChange: (key: string, value: number) => void;
}

export const UserInput: FC<UserInputProps> = ({ onChange, value }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial">Initial Investment</label>
          <input
            id="initial"
            type="number"
            required
            value={value.initial}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange("initial", Number(e.target.value))
            }
          />
        </p>

        <p>
          <label htmlFor="annual">Annual Investment</label>
          <input
            id="annual"
            type="number"
            required
            value={value.annual}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange("annual", Number(e.target.value))
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="returns">Expected Return</label>
          <input
            id="returns"
            type="number"
            required
            value={value.returns}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange("returns", Number(e.target.value))
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            id="duration"
            type="number"
            required
            value={value.duration}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange("duration", Number(e.target.value))
            }
          />
        </p>
      </div>
    </section>
  );
};
