import React from "react";
import { Link } from "react-router-dom";

const NewsList = ({ items }) => {
  const List = items.map((item, index) => (
    <li key={item.id}>
      <h3>{index + 1}</h3>
      <div>
        <div>
          <Link to={`/${item.id}`}>
            <h2>
              <span className="h2-title">{item.headline}</span>
              {item.subheadline.length !== 0 && ` / ${item.subheadline}`}
            </h2>
          </Link>
        </div>
      </div>
    </li>
  ));
  if (items.length === 0) return <div>Nothing to display</div>;
  return <ul className="tab-content-list">{List}</ul>;
};

export default NewsList;
