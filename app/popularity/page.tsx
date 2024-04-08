import React from "react";
import PopularityAllBooks from "./PopularityAllBooks";
import { getPopularityAllBooks } from "@/src/TopPageAPI";
import Pagination from "../components/pagination/PaginationPage";
import styles from "../AllBooks/AllBooks.module.css";
const PopularityBookPage = async ({ params, searchParams }: any) => {
  const page = searchParams.page ? searchParams.page : 1;
  const popularityallbooks = await getPopularityAllBooks(page);
  const itemsPerPage = 10;
  const totalPageCount = 100;
  const baseURL = "popularity";
  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>人気技術書</div>
        <div className={styles.book_all_line} />
        <PopularityAllBooks popularityallbooks={popularityallbooks} />
        <div className="my-[3.5rem] mr-[4rem]">
          <Pagination
            currentPage={page}
            totalPageCount={totalPageCount}
            itemsPerPage={itemsPerPage}
            baseURL={baseURL}
          />
        </div>
      </div>
    </>
  );
};

export default PopularityBookPage;
