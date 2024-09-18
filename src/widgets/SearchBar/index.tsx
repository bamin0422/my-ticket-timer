import { useEffect, useRef, useState } from "react";
import { animate, AnimatePresence, motion } from "framer-motion";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export interface Props {
  keyword?: string;
  onKeywordChange?: (newKeyword: string) => void;
}

const defaultPlaceholder = "Please enter the site you want to access.";

export function SearchBar({ keyword, onKeywordChange }: Props) {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [placeholder, setPlaceholder] = useState<string>("");
  const inputRef = useRef(null);

  const onSubmitHandler = () => {
    setEditMode(false);
  };

  useEffect(() => {
    const runAnimations = async () => {
      while (true) {
        await animate(0, defaultPlaceholder.length, {
          onUpdate: (latest) => {
            setPlaceholder(defaultPlaceholder.slice(0, latest));
          },
          delay: 0.5,
          duration: 0.5,
        });

        await animate(defaultPlaceholder.length, 0, {
          onUpdate: (latest) => {
            setPlaceholder(defaultPlaceholder.slice(0, latest));
          },
          delay: 2.5,
          duration: 0.5,
        });
      }
    };

    runAnimations();
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {editMode ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="top-1/2 left-1/2 border-solid border text-white border-white sm:h-12 grid grid-flow-col justify-stretch gap-2 px-4 py-2 rounded-xl w-[456px]"
          >
            <input
              value={keyword}
              className="bg-transparent w-[348px] focus:outline-none"
              ref={inputRef}
              placeholder={placeholder}
              onChange={(e) =>
                onKeywordChange && onKeywordChange(e.target.value)
              }
              onKeyDown={(e) => e.key === "Enter" && onSubmitHandler()}
            />
            <motion.button
              className="w-[64px]"
              onClick={onSubmitHandler}
              whileTap={{ scale: 0.97 }}
            >
              Submit
            </motion.button>
          </motion.div>
        ) : (
          <motion.button
            transition={{ type: "spring" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{
              scale: 1.3,
              transition: { duration: 0.1 },
            }}
            className="flex top-1/2 left-1/2 items-center justify-center size-12"
            onClick={() => setEditMode(true)}
          >
            <MagnifyingGlassIcon className="stroke-white size-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SearchBar;
