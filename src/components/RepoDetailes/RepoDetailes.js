import React from "react";
import styles from "./RepoDetailes.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RepoDetailes = ({
  name,
  description,
  stars,
  issues,
  Username,
  avatar,
}) => {
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
        <h2>
          <Link to={`/repo/${Username}/${name}`}>{name}</Link>
        </h2>
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
RepoDetailes.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  stars: PropTypes.number,
  issues: PropTypes.number,
  Username: PropTypes.string,
  avatar: PropTypes.string,
};

export default RepoDetailes;
