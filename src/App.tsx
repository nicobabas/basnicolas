import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./screens/Home";
import ContinentDetails from "./screens/ContinentDetails";
import Country from "./screens/Country";

function App() {
  return (
    <>
      <main className="container pb-8 bg-cream">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/continent/:id" element={<ContinentDetails />} />
          <Route path="/country/:id" element={<Country />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
