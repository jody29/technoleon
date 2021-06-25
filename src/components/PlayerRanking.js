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
          { name: "Zubair Sahebdien", score: 69 },
          { name: "Desean Wanders", score: 67 },
          { name: "Carmelo Vaarnold", score: 65 },
          { name: "Trey Shellard", score: 61 },
          { name: "Vince Rosenbaum", score: 59 },
          { name: "Matthew Rijsel", score: 59 },
          { name: "Rida Zouhri", score: 55 },
          { name: "Nehmani Burke", score: 52 },
          { name: "Mert Kambur", score: 50 },
          { name: "Ruben Kuijpers", score: 49 },
          { name: "Rayvano Quant", score: 47 },
          { name: "Jayser Sinester", score: 47 },
          { name: "Micharo Baarn", score: 37 },
          { name: "Rens Kok", score: 34 },
          { name: "Gennaro Esajas", score: 27 },
        ],
      },
      {
        test: "FST",
        players: [
          { name: "Desean Wanders", score: 69 },
          { name: "Zubair Sahebdien", score: 67 },
          { name: "Matthew Rijsel", score: 65 },
          { name: "Carmelo Vaarnold", score: 61 },
          { name: "Mert Kambur", score: 59 },
          { name: "Rida Zouhri", score: 59 },
          { name: "Vince Rosenbaum", score: 55 },
          { name: "Rens Kok", score: 53 },
          { name: "Jayser Sinester", score: 52 },
          { name: "Trey Shellard", score: 50 },
          { name: "Ruben Kuijpers", score: 49 },
          { name: "Gennaro Esajas", score: 47 },
          { name: "Nehmani Burke", score: 47 },
          { name: "Micharo Baarn", score: 37 },
          { name: "Rayvano Quant", score: 27 },
        ],
      },
      {
        test: "GiT",
        players: [
          { name: "Matthew Rijsel", score: 69 },
          { name: "Carmelo Vaarnold", score: 67 },
          { name: "Nehmani Burke", score: 65 },
          { name: "Trey Shellard", score: 61 },
          { name: "Micharo Baarn", score: 59 },
          { name: "Desean Wanders", score: 59 },
          { name: "Ruben Kuijpers", score: 55 },
          { name: "Gennaro Esajas", score: 52 },
          { name: "Jayser Sinester", score: 50 },
          { name: "Zubair Sahebdien", score: 49 },
          { name: "Mert Kambur", score: 47 },
          { name: "Rens Kok", score: 47 },
          { name: "Rida Zouhri", score: 37 },
          { name: "Vince Rosenbaum", score: 34 },
          { name: "Rayvano Quant", score: 27 },
        ],
      },
      {
        test: "M-Compact",
        players: [
          { name: "Zubair Sahebdien", score: 69 },
          { name: "Desean Wanders", score: 67 },
          { name: "Ruben Kuijpers", score: 65 },
          { name: "Rens Kok", score: 61 },
          { name: "Rayvano Quant", score: 59 },
          { name: "Trey Shellard", score: 59 },
          { name: "Vince Rosenbaum", score: 55 },
          { name: "Nehmani Burke", score: 52 },
          { name: "Jayser Sinester", score: 50 },
          { name: "Carmelo Vaarnold", score: 49 },
          { name: "Matthew Rijsel", score: 47 },
          { name: "Rida Zouhri", score: 47 },
          { name: "Micharo Baarn", score: 37 },
          { name: "Gennaro Esajas", score: 34 },
          { name: "Mert Kambur", score: 27 },
        ],
      },
      {
        test: "LSPT",
        players: [
          { name: "Carmelo Vaarnold", score: 69 },
          { name: "Rida Zouhri", score: 67 },
          { name: "Trey Shellard", score: 65 },
          { name: "Matthew Rijsel", score: 61 },
          { name: "Jayser Sinester", score: 59 },
          { name: "Desean Wanders", score: 59 },
          { name: "Mert Kambur", score: 55 },
          { name: "Nehmani Burke", score: 52 },
          { name: "Zubair Sahebdien", score: 50 },
          { name: "Rayvano Quant", score: 49 },
          { name: "Ruben Kuijpers", score: 47 },
          { name: "Vince Rosenbaum", score: 47 },
          { name: "Micharo Baarn", score: 37 },
          { name: "Gennaro Esajas", score: 34 },
          { name: "Rens Kok", score: 27 },
        ],
      },
      {
        test: "Right-eye",
        players: [
          { name: "Vince Rosenbaum", score: 69 },
          { name: "Mert Kambur", score: 67 },
          { name: "Rayvano Quant", score: 65 },
          { name: "Zubair Sahebdien", score: 61 },
          { name: "Rida Zouhri", score: 59 },
          { name: "Trey Shellard", score: 59 },
          { name: "Carmelo Vaarnold", score: 55 },
          { name: "Nehmani Burke", score: 52 },
          { name: "Gennaro Esajas", score: 50 },
          { name: "Desean Wanders", score: 49 },
          { name: "Jayser Sinester", score: 47 },
          { name: "Rens Kok", score: 47 },
          { name: "Ruben Kuijpers", score: 37 },
          { name: "Matthew Rijsel", score: 34 },
          { name: "Micharo Baarn", score: 27 },
        ],
      },
      {
        test: "Ball controll",
        players: [
          { name: "Zubair Sahebdien", score: 69 },
          { name: "Desean Wanders", score: 67 },
          { name: "Carmelo Vaarnold", score: 65 },
          { name: "Trey Shellard", score: 61 },
          { name: "Vince Rosenbaum", score: 59 },
          { name: "Matthew Rijsel", score: 59 },
          { name: "Rida Zouhri", score: 55 },
          { name: "Nehmani Burke", score: 52 },
          { name: "Mert Kambur", score: 50 },
          { name: "Ruben Kuijpers", score: 49 },
          { name: "Rayvano Quant", score: 47 },
          { name: "Jayser Sinester", score: 47 },
          { name: "Micharo Baarn", score: 37 },
          { name: "Rens Kok", score: 34 },
          { name: "Gennaro Esajas", score: 27 },
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
