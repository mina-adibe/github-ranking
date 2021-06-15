import React from "react";
//import styles from "./Repo";

const Repo = ({ name, description, stars, issues, Username, avatar }) => {
  return (
    <div className="container">
      <div></div>
      <div>
        <h2>Repo Names : {name}</h2>
        <p>Repo description {description}</p>
        <p>stars : {stars} </p>
        <p>issues : {issues} </p>
        <p>Username : {Username} </p>
        <div>
          <img src={avatar} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Repo;
