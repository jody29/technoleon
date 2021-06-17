import React from "react";
import "../styles/advice.css";
import { role } from "../index";

export class FstAdvice extends React.Component {
  constructor(props) {
    super(props);
    this.strengths = [
      "Slalom (-0.72s)",
      "Backward dribble (-1.25s)",
      "8-figure (-0.25s)",
      "Fast passing (-0.28s)",
      "Accurate",
    ];
    this.weaknesses = [];
    this.coach = [
      { section: "Overall", good: [""], bad: [""] },
      { section: "Slalom", good: [""], bad: [""] },
      { section: "Dribble", good: [""], bad: [""] },
      { section: "Backwards", good: [""], bad: [""] },
      { section: "8-Figure", good: [""], bad: [""] },
      { section: "Pass", good: [""], bad: [""] },
    ];
  }

  render() {
    return (
      <div className="advice">
        <h2>Training advice</h2>
        {role === "player" ? (
          <div>
            <table>
              <tr>
                <th>Strengths</th>
              </tr>
              {this.strengths.map((strength) => (
                <tr>
                  <td>{strength}</td>
                </tr>
              ))}
            </table>
            <table>
              <tr>
                <th>Weaknesses</th>
              </tr>
              {this.weaknesses.map((weakness) => (
                <tr>
                  <td>{weakness}</td>
                </tr>
              ))}
            </table>
          </div>
        ) : (
          <div className="coachTest">
            {this.coach.map((test) => (
              <div>
                <h2>{test.section}</h2>
                <div>
                  <table>
                    <tr>
                      <th>Strenghts</th>
                    </tr>
                    {test.good.map((person) => (
                      <tr>
                        <td>{person}</td>
                      </tr>
                    ))}
                  </table>
                  <table>
                    <tr>
                      <th>Weaknesses</th>
                    </tr>
                    {test.bad.map((badperson) => (
                      <tr>
                        <td>{badperson}</td>
                      </tr>
                    ))}
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
