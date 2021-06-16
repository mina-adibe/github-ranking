import React from "react";
import { ReposList, Navbar } from "../components/Index";

const HomePage = () => {
  return (
    <div>
      <Navbar title="List of Repos" />
      <ReposList />
    </div>
  );
};

export default HomePage;
