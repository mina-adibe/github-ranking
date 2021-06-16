import React from "react";
import styles from "./RepoDetails.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";

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
      <div className={styles.container_left}>
        <img
          loading="lazy"
          src={avatar}
          alt={username}
          className={styles.image}
        />
      </div>
      <div className={styles.container_right}>
        <div>
          <h2>
            <Link to={`/repo/${username}/${name}`}>{name}</Link>
          </h2>
        </div>

        <div className={styles.title}>
          <p>Username: {username} </p>
        </div>
        <div className={styles.title}>
          <p>Description: {description}</p>
        </div>

        <div>
          <div className={styles.my_button}>
            <span style={{ fontSize: "20.5px" }}>
              <AiOutlineStar />
            </span>
            stars: {stars}
          </div>
          <div className={styles.my_button}>issues: {issues} </div>
        </div>
      </div>
    </div>
  );
};
RepoDetails.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  stars: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  issues: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  Username: PropTypes.string,
  avatar: PropTypes.string,
};

export default RepoDetails;
