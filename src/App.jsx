import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";

import "../server";
import Vans from "./pages/vans/Vans";
import VanDetail from "./pages/vans/VanDetail";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
