import clsx from "clsx";
import { Header } from "./Header";
import Timer from "../Timer";
import { useState } from "react";
import Footer from "./Footer";
import SearchBar from "../SearchBar";
import { ColorPickerContainer } from "../ColorPickerContainer";

export function MainContainer() {
  const [time, setTime] = useState<Date>(new Date());
  const [keyword, setKeyword] = useState<string>("");
  const [color, setColor] = useState("#000000");

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className={clsx(
        "min-h-screen flex flex-col justify-between items-stretch"
      )}
    >
      <Header color={color} setColor={setColor} />
      <div className="flex flex-col justify-center gap-4 items-center">
        <Timer currentTime={time} />
        <div className="flex items-center gap-2">
          <SearchBar
            keyword={keyword}
            onKeywordChange={(newKeyword) => setKeyword(newKeyword)}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainContainer;
