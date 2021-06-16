import React from "react";
import styles from "./RepoDetails.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RepoDetails = ({
  name,
  description,
  stars,
  issues,
  username,
  avatar,
}) => {
  return (
    <div className={styles.container}>
      <div>
        <img
          loading="lazy"
          src={avatar}
          alt={username}
          className={styles.image}
        />
      </div>
      <div>
        <h2>
          <Link to={`/repo/${username}/${name}`}>{name}</Link>
        </h2>
        <p> {description}</p>
        <div>
          <p>stars: {stars} </p>
          <p>issues: {issues} </p>
          <p>Username: {username} </p>
        </div>
      </div>
    </div>
  );
};
RepoDetails.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  stars: PropTypes.number,
  issues: PropTypes.number,
  Username: PropTypes.string,
  avatar: PropTypes.string,
};

export default RepoDetails;
