import React, { useState, useEffect } from "react";
import BookRecommendation from "./components/BookHome/BookRecommendation";
import Link from "next/link";
import {
  getNewBooks,
  getPopularityBooks,
  getRecommendationBooks,
} from "@/app/components/api/TopPageAPI";
import PopularityBook from "./components/BookHome/PopularityBookHome";
import TopPage from "./popularity/TopSlide";

export default async function Home() {
  const newbooks = await getNewBooks();
  const popularitybooks = await getPopularityBooks();
  const recommendationbooks = await getRecommendationBooks();

  return (
    <>
      <main>
        <TopPage newbooks={newbooks} />
        <PopularityBook popularitybooks={popularitybooks} />
        <BookRecommendation recommendationbooks={recommendationbooks} />
        <div className="flex justify-center items-center pb-10">
          <div className="flex mt-[3rem] bg-[#5A5A5A] rounded-full w-[40rem] py-[0.8rem] text-white text-center items-center justify-center cursor-pointer hover:bg-[#3A3A3A]">
            <Link href="/AllBooks" className="relative flex">
              全ての技術書を見る
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
