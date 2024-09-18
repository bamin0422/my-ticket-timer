import { useEffect, useRef, useState } from "react";
import { animate, AnimatePresence, motion } from "framer-motion";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export interface Props {
  keyword?: string;
  onKeywordChange?: (newKeyword: string) => void;
  onSubmit: () => void;
}

const defaultPlaceholder = "Enter the site URL.";

export function SearchBar({ keyword, onKeywordChange, onSubmit }: Props) {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [placeholder, setPlaceholder] = useState<string>("");
  const inputRef = useRef(null);

  const onSubmitHandler = () => {
    setEditMode(false);
    onSubmit();
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
            transition={{ type: "spring", stiffness: 100 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="top-1/2 left-1/2 border-solid border text-white border-white sm:h-12 grid grid-flow-col justify-stretch gap-2 px-4 py-2 h-[48px] rounded-xl sm:w-[456px] w-full"
          >
            <input
              value={keyword}
              className="bg-transparent sm:w-[348px] focus:outline-none"
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
            transition={{ type: "spring", stiffness: 100 }}
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

SearchBar.displayName = "SearchBar";

export default SearchBar;
