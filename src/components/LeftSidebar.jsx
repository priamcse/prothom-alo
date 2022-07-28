import React, { useState } from "react";
import { getDiscussed, getLatest, getMostRead } from "../helper/getData";
import NewsList from "./NewsList";

const LeftSidebar = () => {
  const latest = getLatest();
  const mostRead = getMostRead();
  const discussed = getDiscussed();
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) => {
    return toggleState === index ? className : "";
  };

  return (
    <aside>
      <div className="tab-header-container">
        <button
          className={`tabs ${getActiveClass(1, "active-tabs")}`}
          onClick={() => toggleTab(1)}
        >
          সর্বশেষ
        </button>
        <button
          className={`tabs ${getActiveClass(2, "active-tabs")}`}
          onClick={() => toggleTab(2)}
        >
          পঠিত
        </button>
        <button
          className={`tabs ${getActiveClass(3, "active-tabs")}`}
          onClick={() => toggleTab(3)}
        >
          আলোচিত
        </button>
      </div>
      <div className="tab-body-container">
        <div className={`content ${getActiveClass(1, "active-content")}`}>
          <NewsList items={latest} />
        </div>
        <div className={`content ${getActiveClass(2, "active-content")}`}>
          <NewsList items={mostRead} />
        </div>
        <div className={`content ${getActiveClass(3, "active-content")}`}>
          <NewsList items={discussed} />
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;
