import React, { useState } from "react";
import styles from "../../../styles/Home.module.css";
const Search = ({ searchCoins, setAlertMesssage }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    searchCoins(text);
    setText("");
  };
  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className={styles.search}>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          type="text"
          name="text"
          placeholder="Search by name..."
          value={text}
          onChange={onChange}
          className={styles.placeholder}
        />
        <input type="submit" value="Search" className={styles.submit} />
      </form>
    </div>
  );
};

export default Search;
