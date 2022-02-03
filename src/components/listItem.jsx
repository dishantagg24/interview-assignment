import React from "react";

import "../styles/listItem.css";

export const ListItem = ({ subHeading, content, score, signal, light }) => {
  return (
    <div className={`list-item ${light}`}>
      <div className="sub-heading">
        <h3>{subHeading}</h3>
        <span className="month">vs. last month</span>
      </div>
      {score ? (
        <div className="score-points">
          <span>{content}</span>
          <span style={{ color: `${signal}` }}>({score})</span>
          <div className={signal}></div>
        </div>
      ) : null}
    </div>
  );
};
