import React from "react";
import Navbar from "../layout/Navbar";

export default () => {
  return (
    <div>
      <Navbar />
      <div className="m-5">
        <h1>Page Not Found</h1>
        <p>Sorry, this page does not exist</p>
      </div>
    </div>
  );
};
