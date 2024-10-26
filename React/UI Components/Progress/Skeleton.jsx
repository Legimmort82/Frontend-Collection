import React from "react";
import Styles from "./skeleton.module.css";
function Skeleton() {
  const styles = {
    width: "100%",
    // height: height || '1em',
    // backgroundColor: '#e0e0e0',
    borderRadius: "4px",
    animation: `${Styles.pulse} 1.5s infinite ease-in-out`,
  };
  return (
    <div>
      <div className="w-20 h-10 rounded-lg bg-gray-400 " style={styles}></div>
    </div>
  );
}

export default Skeleton;
