import React from "react";

const Preloader = () => {
  return (
    <div className="center-align circle">
      <div className="progress">
        <div className="indeterminate" />
      </div>
    </div>
  );
};

export default Preloader;
