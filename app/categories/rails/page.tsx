import Image from "next/image";
import styles from "../../AllBooks/AllBooks.module.css";
import RailsBooks from "./Rails";
import { getRailsBooks } from "@/src/ProgrammingAPI";
import PaginationComponent from "@/app/components/pagination/PaginationComponent";

export default async function RailsBook({ params, searchParams }: any) {
  const page = searchParams?.page ? searchParams.page : 1;
  const railsbooks = await getRailsBooks(page);
  const totalDataCount = 15;
  const itemsPerPage = 10;
  const baseURL = "categories/rails";

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>Rails</div>
        <div className={styles.book_all_line} />
        <RailsBooks railsbooks={railsbooks} />
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
