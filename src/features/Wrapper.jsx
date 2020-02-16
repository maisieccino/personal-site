import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "../components/layout/layout.module.css";

import Home from "./Home";
import About from "./About";
import Data from "./Data";
import Blog from "./Blog";
import Uses from "./Uses";
import NotFound from "./NotFound";

const routes = [
  { path: "/about", component: About },
  { path: "/uses", component: Uses },
  { path: "/data", component: Data },
  { path: "/blog", component: Blog },
  { path: "/", component: Home, exact: true }
];
export default () => {
  const location = useLocation();
  return (
    <div className="container">
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={300}
          classNames={{
            enter: styles["page-enter"],
            enterActive: styles["page-enter-active"],
            exit: styles["page-exit"],
            exitActive: styles["page-exit-active"]
          }}
        >
          <Switch location={location}>
            {routes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                exact={route.exact}
                children={<route.component />}
              />
            ))}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};
