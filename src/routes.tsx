import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import CreatePoint from "./pages/CreatePoint";
import Home from "./pages/Home";
const Routes = () => (
  <BrowserRouter>
    <Route component={Home} path="/" exact />
    <Route component={CreatePoint} path="/create-point" exac />
  </BrowserRouter>
);

export default Routes;
