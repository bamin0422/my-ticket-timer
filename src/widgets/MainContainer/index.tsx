import clsx from "clsx";
import { Header } from "./Header";
import Timer from "../Timer";
import { useState } from "react";
import Footer from "./Footer";

export function MainContainer() {
  const [time, setTime] = useState(new Date());

  return (
    <div
      className={clsx(
        "min-h-screen flex flex-col justify-between items-stretch"
      )}
    >
      <Header />
      <Timer currentTime={time} />
      <Footer />
    </div>
  );
}

export default MainContainer;
