import React from "react";
import "../styles/comparepage.css";

let selectedPlayer = false;

let selected;
let picture;
let index;

export class ComparePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMe: true,
      showCompare: false,
      compareFirst: false,
    };
    this.selectPlayer = this.selectPlayer.bind(this);
    this.deselectPlayer = this.deselectPlayer.bind(this);
    this.comparePlayer = this.comparePlayer.bind(this);

    this.players = [
      {
        name: "Desean Wanders",
        picture: "../messi.jpeg",
        dribbling: "",
        coördination: "",
        Visual: "",
        Passing: "",
        Positioning: "",
      },
      {
        name: "Carmelo Vaarnold",
        picture: "",
        dribbling: "",
        coördination: "",
        Visual: "",
        Passing: "",
        Positioning: "",
      },
      {
        name: "Genairo Louisa",
        picture: "",
        dribbling: "",
        coördination: "",
        Visual: "",
        Passing: "",
        Positioning: "",
      },
      {
        name: "Micharo Baarn",
        picture: "",
        dribbling: "",
        coördination: "",
        Visual: "",
        Passing: "",
        Positioning: "",
      },
    ];
  }

  selectPlayer(e) {
    selectedPlayer = e.target.value;
    this.setState({ showMe: false, showCompare: true, compareFirst: true });
    selected = this.players.find((element) => element.name === selectedPlayer);
    index = this.players.findIndex(function (name) {
      return name === selected;
    });
    picture = selected.picture;
    if (index > -1) {
      this.players.splice(index, 1);
    }
  }

  deselectPlayer() {
    this.players.splice(index, index - 2, selected);
    selectedPlayer = false;
    selected = false;
    picture = false;
    this.setState({ showMe: true, showCompare: false, compareFirst: false });
  }

  comparePlayer() {}

  render() {
    return (
      <div className="comparePage">
        <div className="leftSide">
          <section>
            {this.state.showMe ? (
              <div className="selectPlayer">
                <h2>Select player</h2>
                <form action="">
                  {this.players.map((player) => (
                    <fieldset>
                      <input
                        type="radio"
                        name="firstPlayer"
                        value={player.name}
                        id={player.name}
                        className="hide"
                        onClick={this.selectPlayer}
                      />
                      <label for={player.name}>
                        <img
                          src={
                            player.picture !== ""
                              ? player.picture
                              : "../default_player.png"
                          }
                          alt="player"
                        />
                        <p>{player.name}</p>
                      </label>
                    </fieldset>
                  ))}
                  <input type="submit" className="hide" />
                </form>
              </div>
            ) : (
              <div className="selected">
                <span>
                  <h2>Selected player</h2>
                  <button onClick={this.deselectPlayer}>X</button>
                </span>
                <span>
                  <img src={picture ? picture : "../default_profile.png"} />
                  <p>{selectedPlayer}</p>
                </span>
              </div>
            )}
          </section>
          <section>
            {!this.state.showCompare ? (
              <div className="compareWith">
                <h2>Compare player with...</h2>
              </div>
            ) : (
              <div className="selectPlayer">
                <h2>Select player</h2>
                <form action="">
                  {this.players.map((player) => (
                    <fieldset>
                      <input
                        type="radio"
                        name="firstPlayer"
                        value={player.name}
                        id={player.name}
                        className="hide"
                        onClick={this.comparePlayer}
                      />
                      <label for={player.name}>
                        <img
                          src={
                            player.picture !== ""
                              ? player.picture
                              : "../default_profile.png"
                          }
                          alt="player"
                        />
                        <p>{player.name}</p>
                      </label>
                    </fieldset>
                  ))}
                  <input type="submit" className="hide" />
                </form>
              </div>
            )}
          </section>
        </div>
        <div className="rightSide">
          <section className="pictures">
            {!this.state.compareFirst ? (
              <div></div>
            ) : (
              <div className="playerPic">
                <img
                  src={picture !== "" ? picture : "../default_profile.png"}
                  alt="player"
                />
                <p>{selectedPlayer}</p>
              </div>
            )}

            <div></div>
          </section>
        </div>
      </div>
    );
  }
}
