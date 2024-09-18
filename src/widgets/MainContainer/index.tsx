import clsx from "clsx";
import { Header } from "./ui/Header";
import Timer from "../Timer";
import { useEffect, useState } from "react";
import Footer from "./ui/Footer";
import SearchBar from "../SearchBar";
import { useQuery } from "@tanstack/react-query";
import * as siteUrlTimeQuery from "./api/siteUrlTimeQuery";

export function MainContainer() {
  const [keyword, setKeyword] = useState<string>("");
  const [color, setColor] = useState("#000000");
  const [isFirst, setFirst] = useState(true);
  const {
    data: defaultTime,
    refetch,
    error,
  } = useQuery({
    queryKey: [siteUrlTimeQuery.QUERY_KEY],
    queryFn: async () => {
      return isFirst && keyword
        ? new Date()
        : await siteUrlTimeQuery.getSiteUrlTime(keyword);
    },
  });
  const [time, setTime] = useState<Date>(defaultTime ?? new Date());

  const onSubmitHandler = () => {
    refetch()
      .then((newDate) => {
        if (newDate.data) {
          setTime(newDate.data ?? new Date());
        }
      })
      .catch(console.error);
  };

  useEffect(() => {
    setFirst(false);
  }, []);

  if (error) {
    return <></>;
  }

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
            onSubmit={onSubmitHandler}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

MainContainer.displayName = "MainContainer";

export default MainContainer;
