import React, { useEffect, useState } from "react";
//import styles from "./UsersList.module.css";
import Repo from "../repo/Repo";
import { getRepos } from "../../api/repoApi";

const UsersList = () => {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    const getdata = () => {
      getRepos().then((res) => {
        setRepos(res.items);
      });
    };
    getdata();
  }, []);

  return (
    <div>
      {repos &&
        repos.map((elm) => (
          <Repo
            name={elm.name}
            description={elm.description}
            stars={elm.stargazers_count}
            issues={elm.open_issues_count}
            Username={elm.owner.login}
            avatar={elm.owner.avatar_url}
          />
        ))}
    </div>
  );
};

export default UsersList;
