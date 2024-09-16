import { useTimer } from "@/src/shared/lib/hooks/useTimer";
import { AnimatePresence } from "framer-motion";
import { Fragment } from "react";
import Digit from "./Digit";

export interface Props {
  currentTime: Date;
}

export function Timer({ currentTime: defaultCurrentTime }: Props) {
  const { years, months, days, hours, minutes, seconds } =
    useTimer(defaultCurrentTime);

  return (
    <div style={{ display: "inline-flex", overflow: "hidden" }}>
      <AnimatePresence mode="popLayout">
        {[years, months, days].map((time, timeIdx) => (
          <>
            {timeIdx ? (
              <span className="flex flex-col w-5 text-center text-[32px]">
                -
              </span>
            ) : null}
            {time.split("").map((digit, digitIdx) => (
              <Digit key={digit + "-" + digitIdx}>{`${digit}`}</Digit>
            ))}
          </>
        ))}
      </AnimatePresence>

      <div style={{ width: 14, whiteSpace: "nowrap" }} />

      {[hours, minutes, seconds].map((time, timeIdx) => {
        const values = time.split("");
        return (
          <Fragment key={`${timeIdx}`}>
            {timeIdx ? (
              <span className="flex flex-col w-5 text-center text-[32px]">
                :
              </span>
            ) : null}
            <AnimatePresence mode="popLayout" initial={false}>
              {values.map((digit, digitIdx) => (
                <Digit key={digit + "_" + digitIdx}>{digit}</Digit>
              ))}
            </AnimatePresence>
          </Fragment>
        );
      })}
    </div>
  );
}

export default Timer;
