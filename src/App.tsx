import { FC } from "react";
import { Header } from "./components/Header.component";
import { Logic } from "./components/Logic.component";

export const App: FC = () => {
  return (
    <>
      <Header />
      <Logic />
    </>
  );
};
