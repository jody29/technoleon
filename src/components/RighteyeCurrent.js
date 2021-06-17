import React from "react";
import * as d3 from "d3";
import Plot from "react-plotly.js";
import "../styles/current.css";

export class RighteyeCurrent extends React.Component {
  constructor(props) {
    super(props);
    this.gitCurrent = { score: 58 };
    this.positioning = React.createRef();
    this.data = [
      {
        type: "scatterpolar",
        name: "Current status",
        r: [60, 75, 80],
        theta: ["Decision making", "Focus", "Eye movement"],
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
          range: [0, 100],
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

  componentDidMount() {
    let positioning = d3
      .select(this.positioning.current)
      .append("svg")
      .attr("width", 150)
      .attr("height", 130);

    positioning
      .append("path")
      .attr("transform", "translate(80,65)")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(0)
          .outerRadius(50)
          .startAngle(0)
          .endAngle(Math.PI * 2)
      )
      .attr("fill", "white");

    positioning
      .append("path")
      .attr("transform", "translate(80,65)")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(50)
          .outerRadius(60)
          .startAngle(0)
          .endAngle(((Math.PI * 2) / 100) * this.gitCurrent.score)
      )
      .attr("fill", "#E64E24");
  }

  render() {
    return (
      <div className="current">
        <h2>Current status</h2>
        <div>
          <section className="time">
            <span className="stopwatch">
              <div ref={this.positioning}></div>
              <p className="gitscore">{this.gitCurrent.score}</p>
            </span>
            <p>Visual</p>
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
