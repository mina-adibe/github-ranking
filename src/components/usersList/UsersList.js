import React from "react";
import styles from "./UsersList.module.css";
import User from "../user/User";

const UsersList = () => {
  return (
    <div>
      <h1>list</h1>
      <User />
      <User />
      <User />
      <User />
    </div>
  );
};

export default UsersList;
