import React from "react";
import PopularityBook from "../components/BookHome/PopularityBookHome";
import { getPopularityBooks } from "@/src/TopPageAPI";

const PopularityPage = async () => {
  const popularitybooks = await getPopularityBooks();

  return (
    <div>
      <PopularityBook popularitybooks={popularitybooks} />
    </div>
  );
};

export default PopularityPage;
