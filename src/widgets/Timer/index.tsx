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
    <div className="flex flex-col justify-center">
      <div className="flex justify-center items-center">
        <AnimatePresence mode="popLayout">
          {[years, months, days].map((time, timeIdx) => (
            <Fragment key={`${time}-date-${timeIdx}`}>
              {timeIdx ? (
                <span className="flex flex-col w-5 text-center text-[32px]">
                  -
                </span>
              ) : null}
              {time.split("").map((digit, digitIdx) => (
                <Digit
                  sizeType="small"
                  key={digit + "-" + digitIdx}
                >{`${digit}`}</Digit>
              ))}
            </Fragment>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex justify-center items-center">
        {[hours, minutes, seconds].map((time, timeIdx) => (
          <>
            {timeIdx ? (
              <span
                key={`${timeIdx}-divider`}
                className="flex pb-4 px-[48px] flex-col text-center text-[64px]"
              >
                :
              </span>
            ) : null}
            <AnimatePresence
              key={`${timeIdx}-time-digit`}
              mode="popLayout"
              initial={false}
            >
              {time.split("").map((digit, digitIdx) => (
                <Digit sizeType="big" key={digit + "_" + digitIdx}>
                  {digit}
                </Digit>
              ))}
            </AnimatePresence>
          </>
        ))}
      </div>
    </div>
  );
}

export default Timer;
