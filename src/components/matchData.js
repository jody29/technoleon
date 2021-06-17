import React from "react";
import * as d3 from "d3";
import "../styles/matchData.css";
import { arc, max } from "d3";
import Radar from "react-d3-radar";

export class MatchData extends React.Component {
  constructor(props) {
    super(props);
    this.speedGauge = React.createRef();
    this.runningDistance = React.createRef();
    this.passCompletion = React.createRef();
    this.dataset = { speed: 30, highSpeed: 45, sprints: 11 };
    this.runningdata = { distance: 6.6, efd: 4.1 };
    this.explosivness = {
      accHigh: 80,
      turnRight: 70,
      decHigh: 55,
      turnLeft: 85,
    };
    this.passData = {
      forward: 31,
      forwardComp: 20,
      lateral: 50,
      lateralComp: 45,
      backwards: 20,
      backwardComp: 15,
    };
  }

  componentDidMount() {
    let gauge = d3
      .select(this.speedGauge.current)
      .append("svg")
      .attr("width", 150)
      .attr("height", 100);

    let efd = d3
      .select(this.runningDistance.current)
      .append("svg")
      .attr("width", "100%")
      .attr("height", 50);

    gauge
      .append("path")
      .attr("transform", "translate(90,75)")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(50)
          .outerRadius(60)
          .startAngle(-Math.PI / 2)
          .endAngle(-Math.PI / 2 + (Math.PI / 40) * this.dataset.speed)
      )
      .attr("fill", "#E64E24");

    gauge
      .append("path")
      .attr("transform", "translate(90,75)")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(0)
          .outerRadius(50)
          .startAngle(Math.PI / 2)
          .endAngle(-Math.PI / 2)
      )
      .attr("fill", "rgba(255,255,255,0.7)");

    let efdPercentage =
      (this.runningdata.efd / this.runningdata.distance) * 100;
    let ufdPercentage = 100 - efdPercentage;

    let efdKm = d3
      .select(".efd")
      .append("p")
      .text(this.runningdata.efd + "km")
      .attr("position", "absolute")
      .attr(
        "style",
        "position: absolute;left: " +
          ufdPercentage +
          "%;text-align: center;top: -3.1em;width:" +
          efdPercentage +
          "%;"
      );

    efd
      .append("rect")
      .attr("fill", "rgba(255,255,255,.7)")
      .attr("stroke", "black")
      .attr("x", 0)
      .attr("y", 20)
      .attr("width", ufdPercentage + "%")
      .attr("height", 20)
      .attr("rx", 10)
      .attr("ry", 10);

    efd
      .append("rect")
      .attr("fill", "#E64E24")
      .attr("stroke", "black")
      .attr("x", ufdPercentage + "%")
      .attr("y", 20)
      .attr("width", efdPercentage + "%")
      .attr("height", 20)
      .attr("rx", 10)
      .attr("ry", 10);

    let passData = d3
      .select(this.passCompletion.current)
      .append("svg")
      .attr("width", "100%")
      .attr("height", 100)
      .attr("transform", "translate(0, 0)")
      .attr("style", "overflow: visible; position: absolute;");

    let completedForward =
      (this.passData.forwardComp / this.passData.forward) * 100;

    let maxRadius = 92;

    passData
      .append("path")
      .attr("transform", "translate(-91, 127)")
      .attr("style", "position: absolute;")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(30)
          .outerRadius(maxRadius)
          .startAngle(-Math.PI / 2 / 2)
          .endAngle(Math.PI / 2 / 2)
      )
      .attr("fill", "#DC8A85")
      .attr("stroke", "black")
      .attr("stroke-width", "2px");

    passData
      .append("path")
      .attr("transform", "translate(-91, 127)")
      .attr("style", "position: absolute;")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(30)
          .outerRadius(
            (maxRadius / this.passData.forward) * this.passData.forwardComp
          )
          .startAngle(-Math.PI / 2 / 2)
          .endAngle(Math.PI / 2 / 2)
      )
      .attr("fill", "#B0D5A0");

    passData
      .append("path")
      .attr("transform", "translate(-91, 127)")
      .attr("style", "position: absolute")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(30)
          .outerRadius(92)
          .startAngle(-Math.PI / 2 / 2)
          .endAngle(-Math.PI + Math.PI / 2 / 2)
      )
      .attr("fill", "#DC8A85")
      .attr("stroke", "black")
      .attr("stroke-width", "2px");

    passData
      .append("path")
      .attr("transform", "translate(-91, 127)")
      .attr("style", "position: absolute")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(30)
          .outerRadius(
            (maxRadius / this.passData.lateral) * this.passData.lateralComp
          )
          .startAngle(-Math.PI / 2 / 2)
          .endAngle(-Math.PI + Math.PI / 2 / 2)
      )
      .attr("fill", "#B0D5A0");

    passData
      .append("path")
      .attr("transform", "translate(-91, 127)")
      .attr("style", "position: absolute")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(30)
          .outerRadius(92)
          .startAngle(-Math.PI + Math.PI / 2 / 2)
          .endAngle(-Math.PI - Math.PI / 2 / 2)
      )
      .attr("fill", "#DC8A85")
      .attr("stroke", "black")
      .attr("stroke-width", "2px");

    passData
      .append("path")
      .attr("transform", "translate(-91, 127)")
      .attr("style", "position: absolute")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(30)
          .outerRadius(
            (maxRadius / this.passData.backwards) * this.passData.backwardComp
          )
          .startAngle(-Math.PI + Math.PI / 2 / 2)
          .endAngle(-Math.PI - Math.PI / 2 / 2)
      )
      .attr("fill", "#B0D5A0");

    passData
      .append("path")
      .attr("transform", "translate(-91, 127)")
      .attr("style", "position: absolute")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(30)
          .outerRadius(92)
          .startAngle(Math.PI / 2 / 2)
          .endAngle(Math.PI / 2 + Math.PI / 2 / 2)
      )
      .attr("fill", "#DC8A85")
      .attr("stroke", "black")
      .attr("stroke-width", "2px");

    passData
      .append("path")
      .attr("transform", "translate(-91, 127)")
      .attr("style", "position: absolute")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(30)
          .outerRadius(
            (maxRadius / this.passData.lateral) * this.passData.lateralComp
          )
          .startAngle(Math.PI / 2 / 2)
          .endAngle(Math.PI / 2 + Math.PI / 2 / 2)
      )
      .attr("fill", "#B0D5A0");
  }

  render() {
    return (
      <div className="matchData">
        <h2>Match performance</h2>
        <div>
          <a href="#">
            <h3>Speed &amp; Distance</h3>
            <p>Highest Speed</p>
            <p>
              (in {this.dataset.highSpeed} high speed runs &amp;{" "}
              {this.dataset.sprints} sprints)
            </p>
            <div ref={this.speedGauge}>
              <p className="speed">{this.dataset.speed}km/h</p>
            </div>
            <p>Distance covered</p>
            <span className="label">Effective Running Distance</span>
            <div ref={this.runningDistance}></div>
            {this.runningdata.efd > 0.9 ? (
              <div className="efd"></div>
            ) : (
              <div></div>
            )}

            <p className="distance">{this.runningdata.distance}km</p>
          </a>
          <a href="#">
            <h3>Explosiveness</h3>
            <Radar
              className="radarGraph"
              width={500}
              height={600}
              padding={0}
              domainMax={100}
              highlighted={null}
              colors={["#000000", "#6f787f"]}
              style={{
                backgroundColor: "blue",
                axisOverreach: 0,
              }}
              data={{
                variables: [
                  { key: "accelHigh" },
                  { key: "turnRight" },
                  { key: "decelHigh" },
                  { key: "turnLeft" },
                ],
                sets: [
                  {
                    key: "me",
                    label: "My Scores",
                    values: {
                      accelHigh: this.explosivness.accHigh,
                      turnRight: this.explosivness.turnRight,
                      decelHigh: this.explosivness.decHigh,
                      turnLeft: this.explosivness.turnLeft,
                    },
                  },
                ],
              }}
            />
          </a>
          <a href="../fst.html">
            <h3>Passing</h3>
            <div className="legend">
              <p>Completed</p>
              <p>Not Completed</p>
            </div>
            <div className="passCompletion">
              <svg viewBox="0 0 100 100" width="100%" overflow="visible">
                <circle cx="50" cy="38" r="50" fill="white"></circle>
              </svg>
              <img src="../ball@2x.png" />
              <div ref={this.passCompletion}></div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
