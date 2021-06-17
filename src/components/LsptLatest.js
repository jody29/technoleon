import React from "react";
import Plot from "react-plotly.js";
import "../styles/latest.css";
import { role } from "../index";

export class LsptLatest extends React.Component {
  constructor(props) {
    super(props);
    this.slalom = {
      x: [55, 58, 59],
      y: ["Team average", "Position average", "Your time"],
      width: 0.3,
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
    this.data = [this.slalom];
    this.layout = {
      barmode: "stack",
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)",
      xaxis: {
        range: [-1, 70],
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
      <div className="latest" id={role === "coach" ? "hide" : "none"}>
        <div className="upper">
          <h2>Latest testresults</h2>
          <ul>
            <li>Duration of test</li>
            <li>Missed pass</li>
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
