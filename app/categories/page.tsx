import React from "react";
import SearchCategorie from "../components/Search/SearchCategorie";
import styles from "../../app/BookList.module.css";
import Pagination from "../components/pagination/PaginationPage";

const SearchPage = () => {
  return (
    <div>
      <div className="pt-10">
        <SearchCategorie />
        <div className="my-[3.5rem] mr-[4rem]"></div>
      </div>
    </div>
  );
};

export default SearchPage;
