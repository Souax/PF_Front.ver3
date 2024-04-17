import Image from "next/image";
import styles from "../AllBooks/AllBooks.module.css";
import { getComputerBooks } from "@/src/bookAPI";
import ComputerBooks from "./ComputerScience";
import Pagination from "../components/pagination/PaginationPage";

export default async function ComputerBook({ params, searchParams }: any) {
  const page = searchParams?.page ? searchParams.page : 1;
  const computerbooks = await getComputerBooks(page);
  const itemsPerPage = 10;
  const totalPageCount = 100;
  const baseURL = "computer_science";
  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>
          コンピューターサイエンス書籍
        </div>
        <div className={styles.book_all_line} />
        <ComputerBooks computerbooks={computerbooks} />
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
