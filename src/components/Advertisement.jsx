import React from "react";

const Advertisement = ({ type }) => {
  if (type === "portrait") {
    return (
      <div>
        <img
          src="https://via.placeholder.com/350x350"
          width="350px"
          height="350px"
          alt="Advertisement"
        />
      </div>
    );
  } else if (type === "landscape") {
    return (
      <div>
        <img src="https://via.placeholder.com/900x200" alt="Advertisement" />
      </div>
    );
  } else {
    return;
  }
};

export default Advertisement;
