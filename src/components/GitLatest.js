import React from "react";
import Plot from "react-plotly.js";
import "../styles/latest.css";
import { role } from "../index";

export class GitLatest extends React.Component {
  constructor(props) {
    super(props);
    this.before = {
      x: [23, 23, 23],
      y: ["Team average", "Position average", "Your results"],
      width: 0.3,
      name: "Before",
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
    this.during = {
      x: [14, 14, 14],
      y: ["Team average", "Position average", "Your results"],
      width: 0.3,
      name: "During",
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
    this.after = {
      x: [13, 13, 13],
      y: ["Team average", "Position average", "Your results"],
      width: 0.3,
      name: "After",
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

    this.data = [this.before, this.during, this.after];
    this.layout = {
      barmode: "stack",
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)",
      xaxis: {
        range: [-1, 65],
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
      <div className="latest" id={role === "coach" ? "hide" : "none"}>
        <div className="upper">
          <h2>Latest testresults</h2>
          <ul
            style={{
              alignItems: "flex-start",
              position: "absolute",
              left: "15em",
            }}
          >
            <li>Before</li>
            <li>During</li>
            <li>After</li>
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
