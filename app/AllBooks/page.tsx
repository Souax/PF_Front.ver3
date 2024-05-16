import styles from "./AllBooks.module.css";
import Tag from "./Tag/TagProgramming";
import TagFramework from "./Tag/TagFramework";
import { getAllBooks } from "@/src/bookAPI";
import BookList from "./AllBookList";
import PaginationComponent from "../components/pagination/PaginationComponent";

export default async function AllBook({ params, searchParams }: any) {
  const page = searchParams.page ? searchParams.page : 1;
  const allbooks = await getAllBooks(page);
  const totalDataCount = 1367;
  const itemsPerPage = 10;
  const baseURL = "AllBooks";

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>技術書一覧</div>
        <div className={styles.book_all_line} />
        <BookList allbooks={allbooks} />
        <div className="my-[3.5rem] mr-[4rem]">
          <PaginationComponent
            currentPage={page}
            totalDataCount={totalDataCount}
            itemsPerPage={itemsPerPage}
            baseURL={baseURL}
          />
        </div>
      </div>
      <Tag />
      <TagFramework />
    </>
  );
}
