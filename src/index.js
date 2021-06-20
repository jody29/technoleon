import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";

//Components for overview page
import { SideBar } from "./components/SideBar";
import { TestOverview } from "./components/testOverview";
import { TestAverage } from "./components/testAverage";
import { MatchData } from "./components/matchData";

//Components for FST detail
import { FstCurrent } from "./components/FstCurrentstatus";
import { FstAdvice } from "./components/FstAdvice";
import { FstLatest } from "./components/FstLatest";
import { FstDevelopment } from "./components/FstDevelopment";

//Components for GiT detail
import { GitCurrent } from "./components/GitCurrentstatus";
import { GitAdvice } from "./components/GitAdvice";
import { GitLatest } from "./components/GitLatest";
import { GitDevelopment } from "./components/GitDevelopment";

//Components for Mcompact detail
import { McompactCurrent } from "./components/McompactCurrent";
import { McompactAdvice } from "./components/McompactAdvice";
import { McompactLatest } from "./components/McompactLatest";
import { McompactDevelopment } from "./components/McompactDevelopment";

//Components for LSPT detail
import { LsptCurrent } from "./components/LsptCurrent";
import { LsptAdvice } from "./components/LsptAdvice";
import { LsptLatest } from "./components/LsptLatest";
import { LsptDevelopment } from "./components/LsptDevelopment";

//Components for Right Eye detail
import { RighteyeCurrent } from "./components/RighteyeCurrent";
import { RighteyeAdvice } from "./components/RighteyeAdvice";
import { RighteyeLatest } from "./components/RighteyeLatest";
import { RighteyeDevelopment } from "./components/RighteyeDevelopment";

//Player ranking details
import { PlayerRanking } from "./components/PlayerRanking";

//Compare Player page
import { ComparePage } from "./components/ComparePage";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export let role = "coach";

const OverviewPage = () => {
  if (role === "player") {
    return (
      <div className="body">
        <h1 className="header">My Overview</h1>
        <TestOverview />
        <div className="match_testAv">
          <MatchData />
          <TestAverage />
        </div>
      </div>
    );
  } else if (role === "coach") {
    return (
      <div className="body">
        <h1 className="header">Team Overview</h1>
        <TestOverview />
        <div className="match_testAv">
          <MatchData />
          <TestAverage />
        </div>
      </div>
    );
  }
};

const FstPage = () => {
  return (
    <div className="body">
      <Link to="/">
        <p className="back">back</p>
      </Link>
      {role === "player" ? (
        <h1 className="header">Test overview - FST</h1>
      ) : (
        <h1 className="header">Test overview - FST (team)</h1>
      )}

      <div className="detail">
        <FstCurrent />
        <FstAdvice />
        <FstLatest />
        <FstDevelopment />
      </div>
    </div>
  );
};

const GitPage = () => {
  return (
    <div className="body">
      <Link to="/">
        <p className="back">back</p>
      </Link>
      {role === "player" ? (
        <h1 className="header">Test overview - GiT</h1>
      ) : (
        <h1 className="header">Test overview - GiT (team)</h1>
      )}
      <div className="detail">
        <GitCurrent />
        <GitAdvice />
        <GitLatest />
        <GitDevelopment />
      </div>
    </div>
  );
};

const McompactPage = () => {
  return (
    <div className="body">
      <Link to="/">
        <p className="back">back</p>
      </Link>
      {role === "player" ? (
        <h1 className="header">Test overview - M-Compact</h1>
      ) : (
        <h1 className="header">Test overview - M-Compact (team)</h1>
      )}
      <div className="detail">
        <McompactCurrent />
        <McompactAdvice />
        <McompactLatest />
        <McompactDevelopment />
      </div>
    </div>
  );
};

const LsptPage = () => {
  return (
    <div className="body">
      <Link to="/">
        <p className="back">back</p>
      </Link>
      {role === "player" ? (
        <h1 className="header">Test overview - LSPT</h1>
      ) : (
        <h1 className="header">Test overview - LSPT (team)</h1>
      )}
      <div className="detail">
        <LsptCurrent />
        <LsptAdvice />
        <LsptLatest />
        <LsptDevelopment />
      </div>
    </div>
  );
};

const RighteyePage = () => {
  return (
    <div className="body">
      <Link to="/">
        <p className="back">back</p>
      </Link>
      {role === "player" ? (
        <h1 className="header">Test overview - Right eye</h1>
      ) : (
        <h1 className="header">Test overview - Right eye (team)</h1>
      )}
      <div className="detail">
        <RighteyeCurrent />
        <RighteyeAdvice />
        <RighteyeLatest />
        <RighteyeDevelopment />
      </div>
    </div>
  );
};

const Rankings = () => {
  return (
    <div className="body">
      <Link to="/">
        <p className="back">back</p>
      </Link>
      <h1 className="header">Player ranking details</h1>
      <PlayerRanking />
    </div>
  );
};

const ComparePlayer = () => {
  return (
    <div className="body">
      <Link to="/">
        <p className="back">back</p>
      </Link>
      <h1 className="header">Compare player</h1>
      <ComparePage />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SideBar />
      <Switch>
        <Route exact path="/">
          <OverviewPage />
        </Route>
        <Route exact path="/fst">
          <FstPage />
        </Route>
        <Route exact path="/git">
          <GitPage />
        </Route>
        <Route exact path="/mcompact">
          <McompactPage />
        </Route>
        <Route exact path="/lspt">
          <LsptPage />
        </Route>
        <Route exact path="/righteye">
          <RighteyePage />
        </Route>
        <Route exact path="/ballcontrol"></Route>
        <Route exact path="/rankings">
          <Rankings />
        </Route>
        <Route exact path="/compareplayer">
          <ComparePlayer />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
