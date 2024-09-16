import clsx from "clsx";
import { Header } from "./Header";
import Timer from "../Timer";
import { useState } from "react";

export function MainContainer() {
  const [time, setTime] = useState(new Date());

  return (
    <div className={clsx("size-screen")}>
      <Header />
      <Timer currentTime={time} />
    </div>
  );
}

export default MainContainer;
