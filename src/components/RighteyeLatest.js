import React from "react";
import Plot from "react-plotly.js";
import "../styles/latest.css";
import { role } from "../index";

export class RighteyeLatest extends React.Component {
  constructor(props) {
    super(props);
    this.focus = {
      x: [95, 95, 95],
      y: ["Team average", "Position average", "Your results"],
      width: 0.3,
      name: "Focus",
      orientation: "h",
      marker: {
        color: "#E64E1B",
        cornerroundness: {
          bottomleft: 0.3,
          bottomright: 0,
          topleft: 0.3,
          topright: 0,
        },
        line: {
          color: "#FFFFFF",
          width: 1,
        },
      },
      type: "bar",
    };
    this.decision = {
      x: [55, 55, 55],
      y: ["Team average", "Position average", "Your results"],
      width: 0.3,
      name: "Decision making",
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
    this.eye = {
      x: [40, 40, 40],
      y: ["Team average", "Position average", "Your results"],
      width: 0.3,
      name: "Eye Movement",
      orientation: "h",
      marker: {
        color: "#C84A25",
        height: 0.5,
        line: {
          color: "#FFFFFF",
          width: 1,
        },
      },
      type: "bar",
    };
    this.data = [this.focus, this.decision, this.eye];
    this.layout = {
      barmode: "stack",
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)",
      xaxis: {
        range: [-1, 260],
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
            <li>Focus</li>
            <li>Decision making</li>
            <li>Eye movement</li>
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
