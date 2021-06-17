import React from "react";
import Plot from "react-plotly.js";
import "../styles/development.css";
import { role } from "../index";

export class McompactDevelopment extends React.Component {
  constructor(props) {
    super(props);
    this.myProgres = {
      x: [
        "01/01/21",
        "01/04/21",
        "01/10/21",
        "01/01/22",
        "01/04/22",
        "01/07/22",
      ],
      name: role === "player" ? "My progress" : "Team average",
      y: [75, 80, 78, 81, 74, 85, 84],
      type: "scatter",
      line: {
        color: role === "player" ? "white" : "black",
      },
    };
    this.prof = {
      x: [
        "01/01/21",
        "01/04/21",
        "01/10/21",
        "01/01/22",
        "01/04/22",
        "01/07/22",
      ],
      name: "1%",
      y: [100, 100, 100, 100, 100, 100, 100],
      type: "scatter",
      mode: "lines",
      line: {
        color: "#F29C78",
      },
    };
    this.amat = {
      x: [
        "01/01/21",
        "01/04/21",
        "01/10/21",
        "01/01/22",
        "01/04/22",
        "01/07/22",
      ],
      name: "4%",
      y: [96, 96, 96, 96, 96, 96, 96],
      type: "scatter",
      mode: "lines",
      line: {
        color: "#F29C78",
      },
    };
    this.data = [this.myProgres, this.amat, this.prof];
    this.layout = {
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)",
      showlegend: false,
      font: {
        color: "white",
      },
      xaxis: {
        showgrid: false,
        range: [-0.5, 6],
      },
      yaxis: {
        showgrid: false,
      },
      autoscale: false,
      width: 500,
      height: 470,
    };
  }

  render() {
    return (
      <div className="development" id={role === "coach" ? "coachDev" : "none"}>
        <div className="upper">
          <h2>Development</h2>
          <form action="#">
            <fieldset>
              <span>
                <label for="posAv">Position average</label>
                <input type="checkbox" name="posAv"></input>
              </span>
              <span id={role === "coach" ? "hide" : "none"}>
                <label for="teamAv">Team average</label>
                <input type="checkbox" name="teamAv"></input>
              </span>
              <span>
                <label for="ageAv">Age average</label>
                <input type="checkbox" name="ageAv"></input>
              </span>
              <span>
                <label for="othTeam">Other team average</label>
                <input list="teams" name="othTeam" id="othTeam"></input>
                <datalist id="teams">
                  <option value="team 1" />
                  <option value="team 2" />
                  <option value="team 3" />
                  <option value="team 4" />
                </datalist>
              </span>
              <span>
                <label for="totalAv">Total average</label>
                <input type="checkbox" name="totalAv"></input>
              </span>
            </fieldset>
          </form>
        </div>
        <div style={{ position: "absolute", top: -30, left: -40 }}>
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
