import { motion } from "framer-motion";
import { forwardRef, PropsWithChildren } from "react";
import { DigitSizeType } from "./types";
import clsx from "clsx";

export interface Props {
  sizeType: DigitSizeType;
}

export const Digit = forwardRef<HTMLSpanElement, PropsWithChildren<Props>>(
  ({ children, sizeType }, ref) => {
    return (
      <motion.span
        ref={ref} // Forwarded ref is passed here
        className={clsx("flex flex-col text-center text-[32px]", {
          "text-[64px] w-10": sizeType === "big",
          "text-[48px] w-8": sizeType === "normal",
          "text-[32px] w-6": sizeType === "small",
        })}
        transition={{
          type: "spring",
          duration: 0.9,
          bounce: 0.5,
        }}
        initial={{
          opacity: 0,
          y: 40,
          x: 0,
          rotateX: 120,
          scale: 0.5,
        }}
        animate={{ opacity: 1, y: 0, x: 0, rotateX: 0, scale: 1 }}
        exit={{
          opacity: 0,
          y: -10,
          rotateX: 60,
          scale: 0.2,
        }}
      >
        {children}
      </motion.span>
    );
  }
);

export default Digit;
