import Image from "next/image";
import styles from "../../AllBooks/AllBooks.module.css";
import VueBooks from "./Vue";
import { getVueBooks } from "@/src/ProgrammingAPI";
import PaginationComponent from "@/app/components/pagination/PaginationComponent";

export default async function VueBook({ params, searchParams }: any) {
  const page = searchParams?.page ? searchParams.page : 1;
  const vuebooks = await getVueBooks(page);
  const totalDataCount = 19;
  const itemsPerPage = 10;
  const baseURL = "categories/vue";

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>Vue</div>
        <div className={styles.book_all_line} />
        <VueBooks vuebooks={vuebooks} />
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
