import React from "react";
import "../styles/sideBar.css";
import { role } from "../index";

export class SideBar extends React.Component {
  render() {
    return (
      <div className="sideBar">
        <section>
          <span className="profilePic">
            <img src="../messi.jpeg" alt="profile" />
          </span>
          {role === "player" ? (
            <img src="../role_player.png" alt="role" className="role" />
          ) : (
            <img src="../coach.png" alt="role" className="role" />
          )}

          <h1>Desean Wanders</h1>
        </section>

        <section className="licences">
          <a href="#">
            <img
              src="../icons/tpc_transparant.png"
              alt="The Perfect Choice"
              className="active"
            />
          </a>
          <a href="#">
            <img src="../icons/tpl_logo.png" alt="The Perfect Load" />
          </a>

          <form action="#" method="post">
            <button type="submit">
              <img src="../icons/logout.png" alt="Log Out" />
            </button>
          </form>
        </section>
      </div>
    );
  }
}
