import React from "react";
import "../styles/testOverview.css";
import { Link } from "react-router-dom";
import { role } from "../index";

let tests = [
  { src: "../icons/fst.png", title: "FST", result: 100, link: "/fst" },
  { src: "../icons/git.png", title: "GiT", result: 57, link: "/git" },
  {
    src: "../icons/mcompact.png",
    title: "M-compact",
    result: 81,
    link: "/mcompact",
  },
  { src: "../icons/lspt.png", title: "LSPT", result: 67, link: "/lspt" },
  {
    src: "../icons/righteye.png",
    title: "Right-eye",
    result: 60,
    link: "/righteye",
  },
  {
    src: "../icons/ballcontrol.png",
    title: "Ball-control",
    result: 50,
    link: "/ballcontrol",
  },
  { src: "", title: "", result: "" },
  { src: "", title: "", result: "" },
  { src: "", title: "", result: "" },
  { src: "", title: "", result: "" },
];

let coachTests = [
  { src: "../icons/fst.png", title: "FST", result: 74, link: "/fst" },
  { src: "../icons/git.png", title: "GiT", result: 49, link: "/git" },
  {
    src: "../icons/mcompact.png",
    title: "M-compact",
    result: 81,
    link: "/mcompact",
  },
  { src: "../icons/lspt.png", title: "LSPT", result: 67, link: "/lspt" },
  {
    src: "../icons/righteye.png",
    title: "Right-eye",
    result: 60,
    link: "/righteye",
  },
  {
    src: "../icons/ballcontrol.png",
    title: "Ball-control",
    result: 50,
    link: "/ballcontrol",
  },
  { src: "", title: "", result: "" },
  { src: "", title: "", result: "" },
  { src: "", title: "", result: "" },
  { src: "", title: "", result: "" },
];

let ranking = [
  { name: "Dilano Qonquet", rating: 81 },
  { name: "Desean Wanders", rating: 76 },
  { name: "Genairo Louisa", rating: 76 },
  { name: "Zubair Sahebdien", rating: 70 },
  { name: "Carmelo Vaarnold", rating: 65 },
  { name: "Trey Shellard", rating: 61 },
  { name: "Vince Rosenbaum", rating: 59 },
  { name: "Matthew Rijsel", rating: 59 },
  { name: "Rida Zouhri", rating: 55 },
  { name: "Nehmani Burke", rating: 52 },
  { name: "unkown", rating: 50 },
  { name: "unkown", rating: 50 },
  { name: "unkown", rating: 50 },
  { name: "unkown", rating: 50 },
  { name: "unkown", rating: 50 },
];

let rank = 0;

setInterval(function () {
  if (rank !== 0) {
    rank = 0;
  }
}, 1);

export class TestOverview extends React.Component {
  render() {
    return (
      <div className="testOverview">
        <div>
          {role === "player"
            ? tests.map((test) =>
                test.src ? (
                  <Link className="test" to={test.link}>
                    <img src={test.src} alt={test.title} />
                    <span>
                      <p>{test.title}</p>
                      <p>{test.result}</p>
                    </span>
                  </Link>
                ) : (
                  <section className="locked">
                    <img src={test.src} alt={test.title} />
                    <span>
                      <p>{test.title}</p>
                      <p>{test.result}</p>
                    </span>
                  </section>
                )
              )
            : coachTests.map((test) =>
                test.src ? (
                  <Link className="test" to={test.link}>
                    <img src={test.src} alt={test.title} />
                    <span>
                      <p>{test.title}</p>
                      <p>{test.result}</p>
                    </span>
                  </Link>
                ) : (
                  <section className="locked">
                    <img src={test.src} alt={test.title} />
                    <span>
                      <p>{test.title}</p>
                      <p>{test.result}</p>
                    </span>
                  </section>
                )
              )}
        </div>
        {role === "player" ? (
          <div className="leaderBoard">
            <ul>
              <li>
                <button>Club</button>
              </li>
              <li>
                <button>Age</button>
              </li>
              <li className="active">
                <button>Team</button>
              </li>
            </ul>
            <ol>
              <li>
                <span>1.</span>Dilano Qonquet<span>86</span>
              </li>
              <li>
                <span>2.</span>Desean Wanders<span>76</span>
              </li>
              <li>
                <span>3.</span>Genairo Louisa<span>76</span>
              </li>
            </ol>
          </div>
        ) : (
          <div className="coachBoard">
            <ul>
              <li>
                <button>Club</button>
              </li>
              <li>
                <button>Age</button>
              </li>
              <li className="active">
                <button>Team</button>
              </li>
            </ul>
            <ol>
              {ranking.map((player) => (
                <li>
                  <span>{(rank += 1)}</span>
                  {player.name}
                  <span>{player.rating}</span>
                </li>
              ))}
            </ol>

            <div>
              <Link to="/compareplayer">
                <button>Compare player</button>
              </Link>
              <Link to="/rankings">
                <button>Player ranking detail</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}
