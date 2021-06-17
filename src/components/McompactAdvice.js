import React from "react";
import "../styles/advice.css";
import { role } from "../index";

export class McompactAdvice extends React.Component {
  constructor(props) {
    super(props);
    this.strengths = [
      "Moving sideways (+15.27)",
      "Hopping sideways(+19.8)",
      "Hand-Eye coordination (+4.67)",
      "Balance (+4.2)",
    ];
    this.weaknesses = [];
    this.coach = [
      { section: "Overall", good: [""], bad: [""] },
      { section: "Hopping side", good: [""], bad: [""] },
      { section: "Hand-eye coordination", good: [""], bad: [""] },
      { section: "Moving side", good: [""], bad: [""] },
      { section: "Beam points", good: [""], bad: [""] },
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
