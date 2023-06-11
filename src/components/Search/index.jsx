import styles from "./Search.module.scss";

import serchlog from "../../assets/img/search-icon.svg";

function Search() {
  return (
    <div className={styles.root}>
      <input className={styles.input} placeholder="Pizza search ..."></input>
      <img className={styles.icon} src={serchlog} />
    </div>
  );
}

export default Search;
