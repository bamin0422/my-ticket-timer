import { motion } from "framer-motion";
import { forwardRef, PropsWithChildren } from "react";

export const Digit = forwardRef<HTMLSpanElement, PropsWithChildren<unknown>>(
  ({ children }, ref) => {
    return (
      <motion.span
        ref={ref} // Forwarded ref is passed here
        className="flex flex-col w-5 text-center text-[32px]"
        transition={{
          type: "spring",
          duration: 0.9,
          bounce: 0.3,
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
