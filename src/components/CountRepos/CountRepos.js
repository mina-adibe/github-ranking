import React from "react";
import styles from "./CountRepos.module.css";

const CountRepos = ({ countrepos }) => {
  return (
    <div className={styles.container}>
      <h2>number of repos : {countrepos}</h2>
    </div>
  );
};

export default CountRepos;
