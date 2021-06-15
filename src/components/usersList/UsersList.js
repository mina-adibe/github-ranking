import React, { useEffect, useState } from "react";
//import styles from "./UsersList.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import Repo from "../repo/Repo";
import { getRepos } from "../../api/repoApi";

const UsersList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchRipos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //fetch data
  const fetchRipos = () => {
    getRepos(page).then((res) => {
      setData([...data, ...res.items]);
    });
    setPage(page + 1);
  };

  return (
    <div>
      <h1>list of repos</h1>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchRipos}
        hasMore={hasMore}
        loader={<p>Load more...</p>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div>
          {data.map((elm, key) => (
            <div key={key}>
              <Repo
                name={elm.name}
                description={elm.description}
                stars={elm.stargazers_count}
                issues={elm.open_issues_count}
                Username={elm?.owner?.login}
                avatar={elm?.owner?.avatar_url}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default UsersList;
