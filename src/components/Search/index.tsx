import React from "react";
import debounce from "lodash.debounce";
import styles from "./Search.module.scss";

import searchLogo from "../../assets/img/search-icon.svg";
import closeIcon from "../../assets/img/close-icon.svg";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/filter/slice";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");

  const inputLink = React.useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputLink.current?.focus();
  };
  // eslint-disable-next-line
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 300),
    []
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={searchLogo} alt="search" />
      <input
        ref={inputLink}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Pizza search ..."
      />
      {value && (
        <img
          onClick={onClickClear}
          className={styles.closeBtn}
          src={closeIcon}
          alt="close-btn"
        />
      )}
    </div>
  );
};

export default Search;
