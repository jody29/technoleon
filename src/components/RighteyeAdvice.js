import React from "react";
import "../styles/advice.css";
import { role } from "../index";

export class RighteyeAdvice extends React.Component {
  constructor(props) {
    super(props);
    this.strengths = [];
    this.weaknesses = [
      "Focus (-2.12)",
      "Decision making (-4.12)",
      "Eye movement (-7.31)",
    ];
    this.coach = [
      { section: "Overall", good: [""], bad: [""] },
      { section: "Focus", good: [""], bad: [""] },
      { section: "Decision making", good: [""], bad: [""] },
      { section: "Eye movement", good: [""], bad: [""] },
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
