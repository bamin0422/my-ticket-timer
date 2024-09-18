import { PaintBrushIcon } from "@heroicons/react/24/outline";
import { PaintBrushIcon as EditModeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";

export interface Props {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
}

export function ColorPickerContainer({ color, setColor }: Props) {
  const [editMode, setEditMode] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null); // 컴포넌트의 참조

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setEditMode(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <motion.button
        transition={{ type: "spring" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        whileHover={{
          scale: 1.3,
          transition: { duration: 0.1 },
        }}
        className="flex items-center justify-center size-12"
        onClick={() => setEditMode((prev) => !prev)}
      >
        {editMode ? (
          <EditModeIcon className="stroke-white size-6" />
        ) : (
          <PaintBrushIcon className="stroke-white size-6" />
        )}
      </motion.button>
      {editMode && (
        <ColorPicker
          className="absolute z-10 mt-2 right-[24px] top-[52px] bg-transparent shadow-lg"
          value={color}
          onChange={(newColor: string) => setColor(newColor)}
        />
      )}
    </div>
  );
}

ColorPickerContainer.displayName = "ColorPickerContainer";

export default ColorPickerContainer;
