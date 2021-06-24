import React from "react";
import "../styles/rankings.css";

let rank = 0;

export class PlayerRanking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: this.player,
    };
    this.changePlayer = this.changePlayer.bind(this);
    this.average = [];
    this.rankings = [
      {
        test: "average",
        players: [
          { name: "Dilano Qonquet", score: 81 },
          { name: "Desean Wanders", score: 76 },
          { name: "Genairo Lousia", score: 76 },
          { name: "Zubair Sahebdien", score: 70 },
          { name: "Carmelo Vaarnold", score: 65 },
          { name: "Trey Shellard", score: 61 },
          { name: "Vince Rosenbaum", score: 59 },
          { name: "Matthew Rijsel", score: 59 },
          { name: "Nehmani Burke", score: 55 },
          { name: "Rida Zouhri", score: 55 },
          { name: "Mert Kambur", score: 50 },
        ],
      },
      {
        test: "FST",
        players: [
          { name: "Desean Wanders", score: 81 },
          { name: "Matthew Rijsel", score: 76 },
          { name: "Vince Rosenbaum", score: 76 },
          { name: "Carmelo Vaarnold", score: 70 },
          { name: "Zubair Sahebdien", score: 65 },
          { name: "Mert Kambur", score: 61 },
          { name: "Genairo Lousia", score: 59 },
          { name: "Dilano Qonquet", score: 59 },
          { name: "Nehmani Burke", score: 55 },
          { name: "Rida Zouhri", score: 55 },
          { name: "Trey Shellard", score: 50 },
        ],
      },
      {
        test: "GiT",
        players: [
          { name: "Nehmani Burke", score: 81 },
          { name: "Zubair Sahebdien", score: 76 },
          { name: "Trey Shellard", score: 76 },
          { name: "Dilano Qonquet", score: 70 },
          { name: "Rida Zouhri", score: 65 },
          { name: "Vince Rosenbaum", score: 61 },
          { name: "Desean Wanders", score: 59 },
          { name: "Genairo Lousia", score: 59 },
          { name: "Matthew Rijsel", score: 55 },
          { name: "Carmelo Vaarnold", score: 55 },
          { name: "Mert Kambur", score: 50 },
        ],
      },
      {
        test: "M-Compact",
        players: [
          { name: "Dilano Qonquet", score: 81 },
          { name: "Desean Wanders", score: 76 },
          { name: "Genairo Lousia", score: 76 },
          { name: "Zubair Sahebdien", score: 70 },
          { name: "Carmelo Vaarnold", score: 65 },
          { name: "Trey Shellard", score: 61 },
          { name: "Vince Rosenbaum", score: 59 },
          { name: "Matthew Rijsel", score: 59 },
          { name: "Nehmani Burke", score: 55 },
          { name: "Rida Zouhri", score: 55 },
          { name: "Mert Kambur", score: 50 },
        ],
      },
      {
        test: "LSPT",
        players: [
          { name: "Dilano Qonquet", score: 81 },
          { name: "Desean Wanders", score: 76 },
          { name: "Genairo Lousia", score: 76 },
          { name: "Zubair Sahebdien", score: 70 },
          { name: "Carmelo Vaarnold", score: 65 },
          { name: "Trey Shellard", score: 61 },
          { name: "Vince Rosenbaum", score: 59 },
          { name: "Matthew Rijsel", score: 59 },
          { name: "Nehmani Burke", score: 55 },
          { name: "Rida Zouhri", score: 55 },
          { name: "Mert Kambur", score: 50 },
        ],
      },
      {
        test: "Right-eye",
        players: [
          { name: "Dilano Qonquet", score: 81 },
          { name: "Desean Wanders", score: 76 },
          { name: "Genairo Lousia", score: 76 },
          { name: "Zubair Sahebdien", score: 70 },
          { name: "Carmelo Vaarnold", score: 65 },
          { name: "Trey Shellard", score: 61 },
          { name: "Vince Rosenbaum", score: 59 },
          { name: "Matthew Rijsel", score: 59 },
          { name: "Nehmani Burke", score: 55 },
          { name: "Rida Zouhri", score: 55 },
          { name: "Mert Kambur", score: 50 },
        ],
      },
      {
        test: "Ball controll",
        players: [
          { name: "Dilano Qonquet", score: 81 },
          { name: "Desean Wanders", score: 76 },
          { name: "Genairo Lousia", score: 76 },
          { name: "Zubair Sahebdien", score: 70 },
          { name: "Carmelo Vaarnold", score: 65 },
          { name: "Trey Shellard", score: 61 },
          { name: "Vince Rosenbaum", score: 59 },
          { name: "Matthew Rijsel", score: 59 },
          { name: "Nehmani Burke", score: 55 },
          { name: "Rida Zouhri", score: 55 },
          { name: "Mert Kambur", score: 50 },
        ],
      },
    ];
  }

  changePlayer(e) {
    let player = e.target.value;
    this.setState({ selectedOption: player });
    console.log(this.state.selectedOption);
  }

  render() {
    return (
      <div className="rankings">
        {this.rankings.map((test) => (
          <div className="testRank">
            <div id="hide">{(rank = 0)}</div>
            <h2>{test.test}</h2>
            <form>
              {test.players.map((player) => (
                <fieldset>
                  <input
                    type="radio"
                    name="rankName"
                    className="radioRank"
                    checked={this.state.selectedOption === player.name}
                    id={player.name}
                    onChange={this.changePlayer}
                    value={player.name}
                    style={{ display: "none" }}
                  ></input>
                  <label for={player.name} className="rankingLabel">
                    <span>{(rank += 1)}.</span>
                    <span>{player.name}</span>
                    <span>{player.score}</span>
                  </label>
                </fieldset>
              ))}
            </form>
          </div>
        ))}
      </div>
    );
  }
}
