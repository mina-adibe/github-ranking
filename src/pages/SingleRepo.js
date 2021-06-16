import React, { useEffect, useState } from "react";
import { getSingleRepo } from "../api/repoApi";
import { RepoDetailes, Navbar } from "../components/Index";

const SingleRepo = (props) => {
  const { name, username } = props.match.params;
  //console.log(name, username);

  const [data, setData] = useState({
    name: "",
    stargazers_count: "",
    open_issues_count: "",
    login: "",
    avatar_url: "",
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchSingleRipo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //fetch data
  const fetchSingleRipo = () => {
    getSingleRepo(username, name)
      .then((res) => {
        const { name, stargazers_count, open_issues_count } = res;
        const { avatar_url, login } = res.owner;
        setData({
          name,
          stargazers_count,
          open_issues_count,
          login,
          avatar_url,
        });
      })

      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };
  console.log(data);
  return (
    <>
      <Navbar title={name} />
      <div style={{ marginTop: 150 }}>
        <RepoDetailes
          name={data.name}
          description={data.description}
          stars={data.stargazers_count}
          issues={data.open_issues_count}
          Username={data.login}
          avatar={data.avatar_url}
        />
      </div>

      {error && <div>error found</div>}
    </>
  );
};

export default SingleRepo;
