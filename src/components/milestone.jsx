import React from "react";
import { ListItem } from "./listItem";

import "../styles/milestone.css";

export const Milestone = () => {
  return (
    <div className="milestone">
      <h2>Milestone</h2>
      <div className="milestone-list">
        <ListItem
          subHeading="My orders page enhancement completed"
          light="milestone-light"
        />
      </div>
    </div>
  );
};
