import React, { useEffect, useState } from "react";
import styles from "../AllBooks/AllBooks.module.css";
import { getCssBooks } from "@/app/components/api/bookAPI";
import CssBookList from "./CssBooks";
import Pagination from "../components/pagination/PaginationPage";

export default async function CssBook({ params, searchParams }: any) {
  const page = searchParams.page ? searchParams.page : 1;
  const cssbooks = await getCssBooks(page);
  const totalPageCount = 32;
  const itemsPerPage = 10;
  const baseURL = "design";

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>デザイン書籍</div>
        <div className={styles.book_all_line} />
        <CssBookList cssbooks={cssbooks} />
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
}
