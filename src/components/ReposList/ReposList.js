import React, { useEffect, useState } from "react";
import styles from "./ReposList.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import RepoDetailes from "../RepoDetailes/RepoDetailes";
import { getRepos } from "../../api/repoApi";
import { CountRepos } from "../Index";
const ReposList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchRipos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //fetch data
  const fetchRipos = () => {
    getRepos(page)
      .then((res) => {
        setData([...data, ...res.items]);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
    setPage(page + 1);
    console.log("??????????", data.length);
  };

  return (
    <div className={styles.container}>
      <CountRepos countrepos={data.length} />
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
          {data &&
            data.map((repo, key) => (
              <div key={key}>
                <RepoDetailes
                  name={repo?.name}
                  description={repo?.description}
                  stars={repo?.stargazers_count}
                  issues={repo?.open_issues_count}
                  Username={repo?.owner?.login}
                  avatar={repo?.owner?.avatar_url}
                />
              </div>
            ))}
        </div>
      </InfiniteScroll>
      {error && <div className={styles.error}>error found</div>}
    </div>
  );
};

export default ReposList;
