import Image from "next/image";
import styles from "../AllBooks/AllBooks.module.css";
import { getUsefulBooks } from "@/src/bookAPI";
import UsefulBooks from "./UsefulBooks";
import Pagination from "../components/pagination/PaginationPage";

export default async function UsefulBook({ params, searchParams }: any) {
  const page = searchParams?.page ? searchParams.page : 1;
  const usefulbooks = await getUsefulBooks(page);
  const itemsPerPage = 10;
  const totalPageCount = 1;
  const baseURL = "useful_book";

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>役立つ本</div>
        <div className={styles.book_all_line} />
        <UsefulBooks usefulbooks={usefulbooks} />
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
