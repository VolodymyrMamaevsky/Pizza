import React from "react";
import styles from "./Search.module.scss";

import searchLogo from "../../assets/img/search-icon.svg";
import closeIcon from "../../assets/img/close-icon.svg";
import { SearchContext } from "../../App";

function Search() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={searchLogo} alt="search" />
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={styles.input}
        placeholder="Pizza search ..."
      />
      {searchValue && (
        <img
          onClick={() => setSearchValue("")}
          className={styles.closeBtn}
          src={closeIcon}
          alt="close-btn"
        />
      )}
    </div>
  );
}

export default Search;
