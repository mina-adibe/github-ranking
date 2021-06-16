import React from "react";
import { RepoList, Navbar } from "../components/Index";

const HomePage = () => {
  return (
    <div>
      <Navbar title="List of Repos" />
      <RepoList />
    </div>
  );
};

export default HomePage;
