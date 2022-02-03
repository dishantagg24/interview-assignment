import React from "react";
import { ListItem } from "./listItem";

import "../styles/areaOfConcern.css";

export const AreaOfConcern = () => {
  return (
    <div className="area-of-concern">
      <h2>Areas Of Concern</h2>
      <div className="area-of-concern-list">
        <ListItem
          subHeading="Scope for multi-deployment of a microservice scope increased. Forecasted date of completion Oct 2022"
          light="area-of-concern-light"
        />
        <ListItem subHeading="Ratio of Pr merged vs opened has come down" />
        <ListItem
          subHeading="10% more live issues"
          light="area-of-concern-light"
        />
      </div>
    </div>
  );
};
