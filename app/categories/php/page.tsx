import Image from "next/image";
import styles from "../../AllBooks/AllBooks.module.css";
import PhpBooks from "./PHP";
import { getPhpBooks } from "@/src/ProgrammingAPI";
import PaginationComponent from "@/app/components/pagination/PaginationComponent";

export default async function PhpBook({ params, searchParams }: any) {
  const page = searchParams?.page ? searchParams.page : 1;
  const phpbooks = await getPhpBooks(page);
  const totalDataCount = 30;
  const itemsPerPage = 10;
  const baseURL = "categories/php";

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>PHP</div>
        <div className={styles.book_all_line} />
        <PhpBooks phpbooks={phpbooks} />
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
