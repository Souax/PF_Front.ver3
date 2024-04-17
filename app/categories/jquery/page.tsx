import Image from "next/image";
import styles from "../../AllBooks/AllBooks.module.css";
import JqueryBooks from "./jQuery";
import { getJqueryBooks } from "@/src/ProgrammingAPI";
import PaginationComponent from "@/app/components/pagination/PaginationComponent";

export default async function jQueryBook({ params, searchParams }: any) {
  const page = searchParams?.page ? searchParams.page : 1;
  const jquerybooks = await getJqueryBooks(page);
  const totalDataCount = 18;
  const itemsPerPage = 10;
  const baseURL = "categories/jquery";

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>jQuery</div>
        <div className={styles.book_all_line} />
        <JqueryBooks jquerybooks={jquerybooks} />
        <div className="my-[3.5rem] mr-[4rem]">
          <PaginationComponent
            currentPage={page}
            totalDataCount={totalDataCount}
            itemsPerPage={itemsPerPage}
            baseURL={baseURL}
          />
        </div>
      </div>
    </>
  );
}
