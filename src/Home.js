import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Counter from "./Counter";
import DatePicker from "./DatePicker";
import Menu from "./Menu";
import RandomUser from "./RandomUser";
import Todo from "./Todo";

function Home() {
  const { isAuthenticated } = useAuth0();
    console.log(`in home ${isAuthenticated}`)
  return (
    <>
      {isAuthenticated ? (
        <>
          <Menu></Menu>
          <Switch>
            <Route path="/todo/:id" component={Todo}></Route>
            <Route path="/randomUser" component={RandomUser}></Route>
            <Route path="/counter" component={Counter}></Route>
            <Route path="/todo" component={Todo}></Route>
            <Route component={DatePicker}></Route>
          </Switch>
        </>
      ) : (
        <Redirect to="/login"></Redirect>
      )}
    </>
  );
}

export default Home;
