import React, { useState } from "react";

const Preloader = () => {
  const [tr, setTr] = useState(false);
  window.addEventListener("load", function () {
    setTr(true);
  });
  return (
    <div className={tr ? "remove-Preloader" : "preloader_container"}>
      <div className="preloader"></div>
    </div>
  );
};

export default Preloader;
