import React from "react";
import Plot from "react-plotly.js";
import "../styles/latest.css";
import { role } from "../index";

export class FstLatest extends React.Component {
  constructor(props) {
    super(props);
    this.slalom = {
      x: [10, 14, 13],
      y: ["Team average", "Position average", "Your time"],
      width: 0.3,
      radius: 5,
      name: "Slalom",
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
    this.dribble = {
      x: [6, 5, 4],
      y: ["Team average", "Position average", "Your time"],
      width: 0.3,
      name: "Dribble",
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
    this.backwards = {
      x: [3, 5, 5],
      y: ["Team average", "Position average", "Your time"],
      width: 0.3,
      name: "Backwards",
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
    this.figure = {
      x: [7, 6, 6],
      y: ["Team average", "Position average", "Your time"],
      width: 0.3,
      name: "8-figure",
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
    this.pass = {
      x: [7, 6, 6],
      y: ["Team average", "Position average", "Your time"],
      width: 0.3,
      name: "Pass",
      orientation: "h",
      marker: {
        color: "#8F423B",
        line: {
          color: "#FFFFFF",
          width: 1,
        },
      },
      type: "bar",
    };
    this.data = [
      this.slalom,
      this.dribble,
      this.backwards,
      this.figure,
      this.pass,
    ];
    this.layout = {
      barmode: "stack",
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)",
      xaxis: {
        range: [-1, 36],
        showgrid: false,
        color: "white",
        title: {
          text: "time in sec ->",
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
            <li>Slalom</li>
            <li>Dribble</li>
            <li>Backwards</li>
            <li>8-Figure</li>
            <li>Pass</li>
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
