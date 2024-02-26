import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import UseState from "./Hooks/UseState";
import UseEffects from "./Hooks/UseEffect";
import UseRef from "./Hooks/UseRef";
import UseReducer from "./Hooks/UseReducer";
import UseMemo from "./Hooks/UseMemo";
import UseCallback from "./Hooks/UseCallback";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" component={Home} element={<Home />} />
          <Route path="/useState" component={UseState} element={<UseState />} />
          <Route
            path="/UseEffects"
            component={UseEffects}
            element={<UseEffects />}
          />
          <Route path="/UseRef" component={UseRef} element={<UseRef />} />
          <Route
            path="/UseReducer"
            component={UseReducer}
            element={<UseReducer />}
          />
          <Route path="/UseMemo" component={UseMemo} element={<UseMemo />} />
          <Route
            path="/UseCallback"
            component={UseCallback}
            element={<UseCallback />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
