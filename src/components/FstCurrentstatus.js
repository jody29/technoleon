import React from "react";
import Plot from "react-plotly.js";
import "../styles/current.css";

export class FstCurrent extends React.Component {
  constructor(props) {
    super(props);
    this.fstCurrent = { time: 30.81 };
    this.data = [
      {
        type: "scatterpolar",
        name: "Current status",
        r: [20, 20, 25, 20, 10],
        theta: [
          "2. Dribble",
          "1. Slalom",
          "5. Pass",
          "4. 8-figure",
          "3. Backwards",
        ],
        fill: "toself",
        fillcolor: "rgba(230, 78, 27, .5)",
        mode: "markers",
        marker: {
          color: "rgb(230, 78, 27)",
          opacity: 0.5,
          size: 2,
          line: {
            color: "rgba(20, 78, 27, 1)",
            width: 2,
          },
        },
      },
    ];
    this.layout = {
      polar: {
        radialaxis: {
          visible: true,
          range: [0, 25],
        },
      },
      autosize: false,
      width: 330,
      heigth: 330,
      margin: {
        r: 80,
        l: 80,
        t: 0,
        b: 165,
      },
      font: {
        family: "Roboto",
        size: 10,
        color: "white",
      },
      displayModebar: false,
      showlegend: false,
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)",
    };
  }

  render() {
    return (
      <div className="current">
        <h2>Current status</h2>
        <div>
          <section className="time">
            <span className="stopwatch">
              <img src="../stopwatch@2x.png" alt="stopwatch" />
              <p>{this.fstCurrent.time}s</p>
            </span>
            <p>Dribbling</p>
          </section>
          <div style={{ position: "absolute", top: -20, left: 180 }}>
            <Plot
              data={this.data}
              layout={this.layout}
              config={{ displayModeBar: false, responsive: true }}
            />
          </div>
        </div>
      </div>
    );
  }
}
