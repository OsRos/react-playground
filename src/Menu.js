import { useAuth0 } from "@auth0/auth0-react";
import React, { useRef } from "react";
import { defineMessages, useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setLocale } from "./core/User/actions";
import { selectLocale } from "./core/User/selectors";
import "./menu.css";
export default function Menu() {
  const dispatch = useDispatch();
  const { formatMessage } = useIntl();
  const locale = useSelector(selectLocale);
  const selectedLocale = useRef();
  const { isAuthenticated, loginWithRedirect, logout, isLoading } = useAuth0();

  // console.log(locale)
  return (
    <ul className="ul">
      <li className="li">
        <NavLink className="ali" to="/todo" activeClassName="selected">
          {formatMessage(messages.todo, { lang: locale })}
        </NavLink>
      </li>
      <li className="li">
        <NavLink className="ali" to="/randomUser" activeClassName="selected">
          {formatMessage(messages.randomUser, { lang: locale })}
        </NavLink>
      </li>
      <li className="li">
        <NavLink className="ali" to="/counter" activeClassName="selected">
          {formatMessage(messages.counter, { lang: locale })}
        </NavLink>
      </li>
      <li>
        <select
          ref={selectedLocale}
          value={locale}
          onChange={() => dispatch(setLocale(selectedLocale.current.value))}
        >
          <option value="en">English</option>
          <option value="fr">French</option>
        </select>
      </li>
      <li>
        <button onClick={logout}>Log out</button>
      </li>
    </ul>
  );
}
const messages = defineMessages({
  todo: {
    id: "todo",
    defaultMessage: "Todo default",
  },
  randomUser: {
    id: "randomUser",
    defaultMessage: "Random User default",
  },
  counter: {
    id: "counter",
    defaultMessage: "Counter default",
  },
});
// console.log(messages)
