import React from "react";
import "../styles/rankings.css";

let rank = 0;

export class PlayerRanking extends React.Component {
  constructor(props) {
    super(props);
    this.rankings = [
      {
        test: "average",
        players: [
          { rank: 1, name: "Dilano Qonquet", score: 81 },
          { rank: 2, name: "Dilano Qonquet", score: 81 },
          { rank: 3, name: "Dilano Qonquet", score: 81 },
          { rank: 4, name: "Dilano Qonquet", score: 81 },
          { rank: 5, name: "Dilano Qonquet", score: 81 },
          { rank: 6, name: "Dilano Qonquet", score: 81 },
          { rank: 7, name: "Dilano Qonquet", score: 81 },
          { rank: 8, name: "Dilano Qonquet", score: 81 },
          { rank: 9, name: "Dilano Qonquet", score: 81 },
          { rank: 10, name: "Dilano Qonquet", score: 81 },
          { rank: 11, name: "Dilano Qonquet", score: 81 },
        ],
      },
      {
        test: "FST",
        players: [
          { rank: 1, name: "Dilano Qonquet", score: 81 },
          { rank: 2, name: "Dilano Qonquet", score: 81 },
        ],
      },
      {
        test: "GiT",
        players: [
          { rank: 1, name: "Dilano Qonquet", score: 81 },
          { rank: 2, name: "Dilano Qonquet", score: 81 },
        ],
      },
      {
        test: "M-Compact",
        players: [
          { rank: 1, name: "Dilano Qonquet", score: 81 },
          { rank: 2, name: "Dilano Qonquet", score: 81 },
        ],
      },
      {
        test: "LSPT",
        players: [
          { rank: 1, name: "Dilano Qonquet", score: 81 },
          { rank: 2, name: "Dilano Qonquet", score: 81 },
        ],
      },
      {
        test: "Right-eye",
        players: [
          { rank: 1, name: "Dilano Qonquet", score: 81 },
          { rank: 2, name: "Dilano Qonquet", score: 81 },
        ],
      },
      {
        test: "Ball controll",
        players: [
          { rank: 1, name: "Dilano Qonquet", score: 81 },
          { rank: 2, name: "Dilano Qonquet", score: 81 },
        ],
      },
    ];
  }

  render() {
    return (
      <div className="rankings">
        {this.rankings.map((test) => (
          <div className="testRank">
            <h2>{test.test}</h2>
            <ol>
              {test.players.map((player) => (
                <li>
                  <span>{player.rank}.</span>
                  <span>{player.name}</span>
                  <span>{player.score}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    );
  }
}
