import React from "react";
import "../styles/advice.css";
import { role } from "../index";

export class LsptAdvice extends React.Component {
  constructor(props) {
    super(props);
    this.strengths = ["Fast", "Listened to commands"];
    this.weaknesses = ["Try to be more accurate", "Stick to the rules"];
    this.coach = [
      { section: "Overall", good: [""], bad: [""] },
      { section: "Missing bench", good: [""], bad: [""] },
      { section: "Wrong target", good: [""], bad: [""] },
      { section: "Missing target", good: [""], bad: [""] },
      { section: "Touching a cone", good: [""], bad: [""] },
      { section: "Passing outside", good: [""], bad: [""] },
      { section: "Over 43 sec", good: [""], bad: [""] },
      { section: "Hitting 10 cm strip", good: [""], bad: [""] },
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
