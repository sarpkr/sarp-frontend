import React, { lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Layout } from "./components";
import "antd/dist/antd.css";

const Main = lazy(() => import("./pages/main"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
