import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Apps from "./pages/Apps";
import AppDetails from "./pages/AppDetails";
import Installation from "./pages/Installation";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/apps/:id" element={<AppDetails />} />
        <Route path="/installation" element={<Installation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;