"use client";
import { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";

export function Provider({ children }: PropsWithChildren) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

export default Provider;
