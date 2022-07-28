import React from "react";
import Featured from "../components/Featured";
import MetaData from "../components/layouts/MetaData";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";

const HomePage = () => {
  return (
    <div className="container">
      <MetaData title="প্রথম আলো | বাংলা নিউজ পেপার" />
      <div className="row">
        <div className="col-1">
          <LeftSidebar />
        </div>
        <div className="col-2">
          <Featured />
        </div>
        <div className="col-1">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
