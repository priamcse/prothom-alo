import React from "react";
import { Link } from "react-router-dom";
import { getSelected } from "../helper/getData";
import Advertisement from "./Advertisement";

const RightSidebar = () => {
  const data = getSelected();
  const items = data.slice(3, data.length);
  //   console.log(items);
  const list = items.map((item) => (
    <div key={item.id} className="box">
      <div className="left">
        <Link to={`/${item.id}`}>
          <h3>
            <span className="h3-title">{item.headline}</span>
            {item.subheadline.length !== 0 && ` / ${item.subheadline}`}
          </h3>
        </Link>
        <div className="time">৪ ঘণ্টা আগে</div>
      </div>
      <div className="right">
        <img src={item.thumb} />
      </div>
    </div>
  ));
  return (
    <aside>
      <div>
        <h2 className="ad-title">বিজ্ঞাপন</h2>
        <Advertisement type="portrait" />
        <hr className="seperator" />
        {items.length !== 0 && list}
      </div>
    </aside>
  );
};

export default RightSidebar;
