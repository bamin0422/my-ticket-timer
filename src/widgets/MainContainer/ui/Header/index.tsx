"use client";

import { TicketIcon } from "@heroicons/react/24/solid";
import ColorPickerContainer from "../../../ColorPickerContainer";
import { Dispatch, SetStateAction } from "react";

export interface Props {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
}

export function Header({ color, setColor }: Props) {
  return (
    <div className="bg-transparent w-full h-14 flex items-center justify-between px-2 py-4 gap-2">
      <div className="flex items-center gap-2 px-2">
        <TicketIcon className="size-5" />
        <h1 className="">MY TICKET TIMER</h1>
      </div>
      <ColorPickerContainer color={color} setColor={setColor} />
    </div>
  );
}

Header.displayName = "Header";

export default Header;
