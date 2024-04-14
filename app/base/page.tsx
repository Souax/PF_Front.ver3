import Image from "next/image";
import styles from "../AllBooks/AllBooks.module.css";
import { getBaseBooks } from "@/app/components/api/bookAPI";
import BaseBooks from "./BaseBooks";
import Pagination from "../components/pagination/PaginationPage";

export default async function BaseBook({ params, searchParams }: any) {
  const page = searchParams?.page ? searchParams.page : 1;
  const basebooks = await getBaseBooks(page);
  const itemsPerPage = 10;
  const totalPageCount = 15;
  const baseURL = "base";

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>プログラミング入門書</div>
        <div className={styles.book_all_line} />
        <BaseBooks basebooks={basebooks} />
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
