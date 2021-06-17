import React from "react";
import "../styles/testAverage.css";
import { role } from "../index";

let tests = [
  {
    title: "Dribbling (FST)",
    result: 100,
    average: 65,
  },
  {
    title: "Coördination (M-Compact)",
    result: 81,
    average: 60,
  },
  {
    title: "Visual (Right-eye)",
    result: 60,
    average: 51,
  },
  {
    title: "Passing (LSPT)",
    result: 67,
    average: 72,
  },
  {
    title: "Positioning (GiT)",
    result: 57,
    average: 60,
  },
];

export class TestAverage extends React.Component {
  render() {
    return (
      <div className={role === "player" ? "testAverage" : "testCoach"}>
        <section>
          <h2>Testscores</h2>
          <p>Average</p>
        </section>
        <section className="progressBars">
          {tests.map((test) => (
            <div>
              <span>
                <p>{test.title}</p>
                <p>{test.result}/100</p>
              </span>
              <progress
                className="progressAv"
                value={test.average}
                max="100"
              ></progress>

              {test.result >= test.average ? (
                <progress
                  className="progress"
                  value={test.result}
                  max="100"
                ></progress>
              ) : (
                <progress
                  className="progressLow"
                  value={test.result}
                  max="100"
                ></progress>
              )}
            </div>
          ))}
        </section>
      </div>
    );
  }
}
