import React from "react";
import "../styles/advice.css";
import { role } from "../index";

export class GitAdvice extends React.Component {
  constructor(props) {
    super(props);
    this.strengths = [
      "Positioning before and during given pass (+0.67, +1.07)",
    ];
    this.weaknesses = ["Positioning after pass is given (-0.13)"];
    this.coach = [
      { section: "Overall", good: [""], bad: [""] },
      { section: "Before pass", good: [""], bad: [""] },
      { section: "During pass", good: [""], bad: [""] },
      { section: "After pass", good: [""], bad: [""] },
    ];
  }

  render() {
    return (
      <div className="advice">
        <h2>Training advice</h2>
        {role === "plaer" ? (
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
