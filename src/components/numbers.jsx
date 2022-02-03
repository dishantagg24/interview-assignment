import React from "react";
import { ListItem } from "./listItem";

import "../styles/numbers.css";

export const Numbers = () => {
  return (
    <div className="numbers">
      <h2>Numbers</h2>
      <div className="numbers-list">
        <ListItem
          subHeading="Deployement"
          content="100"
          score="-50"
          signal="red"
          light="numbers-light"
        />
        <ListItem
          subHeading="Contributors"
          content="30"
          score="5"
          signal="green"
        />
        <ListItem
          subHeading="Live Issues"
          content="140"
          score="1"
          signal="red"
          light="numbers-light"
        />
        <ListItem
          subHeading="PR Opened"
          content="250"
          score="-42"
          signal="red"
        />
        <ListItem
          subHeading="PR Merged"
          content="150"
          score="100"
          signal="green"
          light="numbers-light"
        />
      </div>
    </div>
  );
};
