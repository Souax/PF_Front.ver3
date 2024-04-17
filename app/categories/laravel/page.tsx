import Image from "next/image";
import styles from "../../AllBooks/AllBooks.module.css";
import { getLaravelBooks } from "@/src/ProgrammingAPI";
import LaravelBooks from "./Laravel";
import PaginationComponent from "@/app/components/pagination/PaginationComponent";

export default async function LaravelBook({ params, searchParams }: any) {
  const page = searchParams?.page ? searchParams.page : 1;
  const laravelbooks = await getLaravelBooks(page);
  const totalDataCount = 10;
  const itemsPerPage = 10;
  const baseURL = "categories/laravel";

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>Laravel</div>
        <div className={styles.book_all_line} />
        <LaravelBooks laravelbooks={laravelbooks} />
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
