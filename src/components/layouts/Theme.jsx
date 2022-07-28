import React, { Fragment } from "react";
import Advertisement from "../Advertisement";
import Footer from "./Footer";
import Header from "./Header";

const Theme = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <div className="ft-ad">
        <Advertisement type="landscape" />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Theme;
