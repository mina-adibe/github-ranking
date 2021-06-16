import React from "react";
import styles from "./CountRepos.module.css";

const CountRepos = ({ countrepos, page }) => {
  return (
    <div className={styles.container}>
      <h3>page: {page}</h3>
      <h3>No of repos: {countrepos}</h3>
    </div>
  );
};

export default CountRepos;
