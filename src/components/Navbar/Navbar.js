import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { AiFillGithub } from "react-icons/ai";

const Navbar = ({ title }) => {
  return (
    <>
      <div className={styles.nav}>
        <div>
          <Link to="/">
            <h1>
              <AiFillGithub /> Github Ranking
            </h1>
          </Link>
        </div>
        <div>
          <h1>{title}</h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
