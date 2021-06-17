import React from "react";
import Plot from "react-plotly.js";
import "../styles/latest.css";
import { role } from "../index";

export class McompactLatest extends React.Component {
  constructor(props) {
    super(props);
    this.moveSide = {
      x: [150, 200, 180],
      y: ["Team average", "Position average", "Your results"],
      width: 0.3,
      name: "Moving sideways",
      orientation: "h",
      marker: {
        color: "#E64E1B",
        line: {
          color: "#FFFFFF",
          width: 1,
        },
      },
      type: "bar",
    };
    this.stepSide = {
      x: [90, 110, 110],
      y: ["Team average", "Position average", "Your results"],
      width: 0.3,
      name: "Stepping sideways",
      orientation: "h",
      marker: {
        color: "#DA4C1F",
        line: {
          color: "#FFFFFF",
          width: 1,
        },
      },
      type: "bar",
    };
    this.handEye = {
      x: [50, 90, 85],
      y: ["Team average", "Position average", "Your results"],
      width: 0.3,
      name: "Hand-eye coördination",
      orientation: "h",
      marker: {
        color: "#C84A25",
        line: {
          color: "#FFFFFF",
          width: 1,
        },
      },
      type: "bar",
    };
    this.beamPoints = {
      x: [90, 110, 75],
      y: ["Team average", "Position average", "Your results"],
      width: 0.3,
      name: "Beam points",
      orientation: "h",
      marker: {
        color: "#AE4730",
        line: {
          color: "#FFFFFF",
          width: 1,
        },
      },
      type: "bar",
    };
    this.data = [this.moveSide, this.stepSide, this.handEye, this.beamPoints];
    this.layout = {
      barmode: "stack",
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)",
      xaxis: {
        range: [-1, 525],
        showgrid: false,
        color: "white",
        title: {
          text: "points ->",
          font: {
            size: 10,
            color: "white",
          },
        },
        zerolinecolor: "white",
      },
      autoscale: false,
      width: 530,
      height: 300,
      showlegend: false,
      font: {
        color: "white",
      },
      margin: {
        r: 30,
        l: 110,
        t: 0,
        b: 60,
      },
    };
  }

  render() {
    return (
      <div className="latest" id={role === "coach" ? "hide" : "nonce"}>
        <div className="upper">
          <h2>Latest testresults</h2>
          <ul>
            <li>Moving side</li>
            <li>Stepping side</li>
            <li>Hand-eye </li>
            <li>Beam</li>
          </ul>
          <form action="#">
            <fieldset>
              <span>
                <label for="posAv">Position average</label>
                <input type="checkbox" name="posAv"></input>
              </span>
              <span>
                <label for="teamAv">Team average</label>
                <input type="checkbox" name="teamAv"></input>
              </span>
            </fieldset>
          </form>
        </div>
        <div style={{ position: "absolute", left: 0, top: 100 }}>
          <Plot
            data={this.data}
            layout={this.layout}
            config={{ displayModeBar: false }}
          />
        </div>
      </div>
    );
  }
}
