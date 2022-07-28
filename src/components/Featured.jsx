import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { getSelected } from "../helper/getData";

const Featured = () => {
  const data = getSelected();
  const bigFeatured = data.slice(0, 1);
  const items = data.slice(1, 3);
  //   console.log(bigFeatured);
  const itemsList = items.map((item) => (
    <div key={item.id}>
      <img src={item.thumb} />
      <Link to={`/${item.id}`}>
        <h3>
          <span className="h3-title">{item.headline}</span>
          {item.subheadline.length !== 0 && ` / ${item.subheadline}`}
        </h3>
      </Link>
    </div>
  ));
  console.log(items);
  return (
    <Fragment>
      <h2>নির্বাচিত</h2>
      <Link to={`/${bigFeatured[0].id}`}>
        <div className="featured-box">
          <img
            src={bigFeatured[0].thumb}
            title={bigFeatured[0].title}
            className="big-image"
          />
          <h2>{bigFeatured[0].headline}</h2>
        </div>
      </Link>
      <div className="rest-selected">{itemsList}</div>
    </Fragment>
  );
};

export default Featured;
