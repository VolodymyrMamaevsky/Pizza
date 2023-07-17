import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

type PaginationProps = {
  currentPage: number;
  onChangePage: any;
};

const Pagination: React.FC<PaginationProps> = ({
  onChangePage,
  currentPage,
}) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
      previousLabel="<"
    />
  );
};

export default Pagination;
