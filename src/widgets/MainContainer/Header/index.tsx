"use client";
import { styleState } from "@/src/shared/store/styleState";
import Image from "next/image";
import { useRecoilState } from "recoil";

export interface Props {}

export function Header() {
  return <div className="bg-transparent w-full h-14 flex items-center"></div>;
}

export default Header;
