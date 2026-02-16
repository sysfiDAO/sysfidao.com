import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Ecosystem from "./pages/Ecosystem";
import Token from "./pages/Token";
import Roadmap from "./pages/Roadmap";
import About from "./pages/About";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import SysfiLabs from "./pages/SysfiLabs";
import DAO from "./pages/DAO";
import PrivacyPolicy from "./pages/Policy";
import TermsOfUse from "./pages/Terms";
import Documentation from "./pages/Documentation";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sysfi/nexus" element={<Features />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/governance" element={<DAO />} />
          <Route path="/sysfilab" element={<SysfiLabs />} />
          <Route path="/token" element={<Token />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/about" element={<About />} />
          <Route path="/policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/sysfi/documentation" element={<Documentation />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
