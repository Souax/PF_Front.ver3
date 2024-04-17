import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../AllBooks/AllBooks.module.css";
import { getBackBooks } from "@/src/bookAPI";
import BackBooks from "./Back";
import Pagination from "../components/pagination/PaginationPage";

export default async function BackBook({ params, searchParams }: any) {
  const page = searchParams?.page ? searchParams.page : 1;
  const backbooks = await getBackBooks(page);
  const itemsPerPage = 10;
  const totalPageCount = 100;
  const baseURL = "back_end";

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>バックエンド</div>
        <div className={styles.book_all_line} />
        <BackBooks backbooks={backbooks} />
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
