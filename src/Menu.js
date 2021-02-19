import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";
export default function Menu() {
  return (
    <ul className="ul">
      <li className="li">
        <NavLink className="ali" to="/todo" activeClassName="selected">Todo</NavLink>
      </li>
      <li className="li">
        <NavLink className="ali" to="/randomUser" activeClassName="selected">Random User</NavLink>
      </li>
      <li className="li">
        <NavLink className="ali" to="/counter" activeClassName="selected">Counter</NavLink>
      </li>
    </ul>
  );
}
