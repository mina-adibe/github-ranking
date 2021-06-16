import React, { useEffect, useState, useCallback } from "react";
import styles from "./RepoList.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import RepoDetails from "../RepoDetails/RepoDetails";
import { getRepos } from "../../api/repoApi";
import { CountRepos } from "../Index";

const RepoList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  //fetch data
  const fetchData = useCallback(async () => {
    try {
      const res = await getRepos(page);
      setData((data) => [...data, ...res.items]);
      setHasMore(res.items.length !== 0);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  }, [page, setData, setError, setHasMore]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const fetchMore = useCallback(() => setPage((page) => page + 1), [setPage]);

  return (
    <div className={styles.container}>
      <CountRepos countrepos={data.length} />
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMore}
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
                <RepoDetails
                  name={repo?.name}
                  description={repo?.description}
                  stars={repo?.stargazers_count}
                  issues={repo?.open_issues_count}
                  username={repo?.owner?.login}
                  avatar={repo?.owner?.avatar_url}
                />
              </div>
            ))}
        </div>
      </InfiniteScroll>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default RepoList;
