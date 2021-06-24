import React from "react";
import "../styles/comparepage.css";

let selectedPlayer = false;
let comparePlayer = false;

let selected;
let picture;
let pictureRight;
let index;
let compared;
let resultLeft;
let resultRight;

export class ComparePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMe: true,
      showCompare: false,
      compareFirst: false,
      compareSecond: false,
    };
    this.selectPlayer = this.selectPlayer.bind(this);
    this.deselectPlayer = this.deselectPlayer.bind(this);
    this.comparePlayer = this.comparePlayer.bind(this);
    this.tests = [
      "dribbling",
      "coördination",
      "Visual",
      "Passing",
      "Positioning",
    ];

    this.players = [
      {
        name: "Desean Wanders",
        picture: "../messi.jpeg",
        results: [100, 85, 24, 67, 57],
      },
      {
        name: "Carmelo Vaarnold",
        picture: "",
        results: [94, 67, 41, 74, 76],
      },
      {
        name: "Genairo Louisa",
        picture: "",
        results: [78, 63, 85, 50, 80],
      },
      {
        name: "Micharo Baarn",
        picture: "",
        results: [55, 75, 60, 74, 44],
      },
    ];
  }

  selectPlayer(e) {
    selectedPlayer = e.target.value;
    this.setState({ showMe: false, showCompare: true, compareFirst: true });
    selected = this.players.find((element) => element.name === selectedPlayer);
    resultLeft = selected.results;
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
    comparePlayer = false;
    compared = false;
    selected = false;
    picture = false;
    pictureRight = false;
    this.setState({
      showMe: true,
      showCompare: false,
      compareFirst: false,
      compareSecond: false,
    });
  }

  comparePlayer(e) {
    comparePlayer = false;
    pictureRight = false;
    comparePlayer = e.target.value;
    this.setState({ compareSecond: true });
    compared = this.players.find((element) => element.name === comparePlayer);
    resultRight = compared.results;
    pictureRight = compared.picture;
  }

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
                              : "../default_profile.png"
                          }
                          className={player.picture !== "" ? "none" : "default"}
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
                  <img
                    src={picture ? picture : "../default_profile.png"}
                    className={picture !== "" ? "none" : "default"}
                  />
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
                          className={player.picture !== "" ? "none" : "default"}
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
                  className={picture !== "" ? "none" : "defaultPic"}
                  alt="player"
                />
                <p>{selectedPlayer}</p>
              </div>
            )}
            {!this.state.compareSecond ? (
              <div></div>
            ) : (
              <div className="playerPic">
                <img
                  src={
                    pictureRight !== ""
                      ? pictureRight
                      : "../default_profile.png"
                  }
                  className={pictureRight !== "" ? "none" : "defaultPic"}
                  alt="player"
                />
                <p>{comparePlayer}</p>
              </div>
            )}
          </section>
          <section className="stats">
            {!comparePlayer ? (
              <ul className="emptyTest">
                {this.tests.map((test) => (
                  <li>{test}</li>
                ))}
              </ul>
            ) : (
              <div className="fullTest">
                <div className="testsView">
                  {this.tests.map((tests) => (
                    <p>{tests}</p>
                  ))}
                </div>
                <ul>
                  {resultLeft.map((results) => (
                    <li>
                      <p>{results}</p>
                      <progress
                        value={results}
                        className={
                          resultRight[
                            resultLeft.findIndex(function (result) {
                              return result === results;
                            })
                          ] > results
                            ? "red"
                            : "green"
                        }
                        id="leftResult"
                        max="100"
                      ></progress>
                    </li>
                  ))}
                </ul>
                <ul>
                  {resultRight.map((compare) => (
                    <li>
                      <progress
                        value={compare}
                        className={
                          resultLeft[
                            resultRight.findIndex(function (result) {
                              return result === compare;
                            })
                          ] > compare
                            ? "red"
                            : "green"
                        }
                        max="100"
                      ></progress>
                      <p>{compare}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        </div>
      </div>
    );
  }
}
