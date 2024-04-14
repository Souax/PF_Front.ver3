import Image from "next/image";
import styles from "../../AllBooks/AllBooks.module.css";
import GoBooks from "./Go";
import { getGoBooks } from "@/app/components/api/ProgrammingAPI";
import PaginationComponent from "@/app/components/pagination/PaginationComponent";

export default async function GoBook({ params, searchParams }: any) {
  const page = searchParams?.page ? searchParams.page : 1;
  const gobooks = await getGoBooks(page);
  const totalDataCount = 180;
  const itemsPerPage = 10;
  const baseURL = "categories/go";

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>Go</div>
        <div className={styles.book_all_line} />
        <GoBooks gobooks={gobooks} />
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
