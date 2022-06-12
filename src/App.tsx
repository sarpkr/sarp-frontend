import React, { lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Layout } from "./components";

const Main = lazy(() => import("./pages/main"));
const Profile = lazy(() => import("./pages/profile"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
