import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./view/Login/Login";

const App = () => {
  return (
    <Routes>
      <Route element={<Login />} path="/" />
    </Routes>
  );
};

export default App;
