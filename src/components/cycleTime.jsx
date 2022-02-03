import React from "react";
import { ListItem } from "./listItem";

import "../styles/cycleTime.css";

export const CycleTime = () => {
  return (
    <div className="cycle-time">
      <h2>CycleTime</h2>
      <div className="cycle-list">
        <ListItem
          subHeading="Live Issues"
          content="2 Days"
          score="0"
          signal="green"
          light="cycle-light"
        />
        <ListItem subHeading="PR" content="1 Day" score="0" signal="green" />
        <ListItem
          subHeading="Story"
          content="15 Days"
          score="-5"
          signal="red"
          light="cycle-light"
        />
      </div>
    </div>
  );
};
