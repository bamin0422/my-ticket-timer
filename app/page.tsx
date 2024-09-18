"use client";
import Provider from "@/src/app/Provider";
import MainContainer from "@/src/widgets/MainContainer";

export default function Index() {
  return (
    <div className="size-full">
      <Provider>
        <MainContainer />
      </Provider>
    </div>
  );
}
