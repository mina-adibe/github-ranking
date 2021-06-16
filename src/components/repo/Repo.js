import React from "react";
import styles from "./Repo.module.css";
import PropTypes from "prop-types";

const Repo = ({ name, description, stars, issues, Username, avatar }) => {
  return (
    <div className={styles.container}>
      <div>
        <img
          loading="lazy"
          src={avatar}
          alt={Username}
          className={styles.image}
        />
      </div>
      <div>
        <h2> {name}</h2>
        <p> {description}</p>
        <div>
          <p>stars: {stars} </p>
          <p>issues: {issues} </p>
          <p>Username: {Username} </p>
        </div>
      </div>
    </div>
  );
};
Repo.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  stars: PropTypes.number,
  issues: PropTypes.number,
  Username: PropTypes.string,
  avatar: PropTypes.string,
};

export default Repo;
