import React, { Component } from "react";

import RandomVsRandomGame from "../integrations/RandomVsRandomGame";

class Demo extends Component {
  render() {
    return (
      <div style={boardsContainer}>
        <RandomVsRandomGame />
      </div>
    );
  }
}

export default Demo;

const boardsContainer = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
  width: "100vw",
  marginTop: 30,
  marginBottom: 50
};
