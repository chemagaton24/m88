import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Casino, Home } from "./routes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/casino" element={<Casino />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
