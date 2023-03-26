import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import { Casino, Home, LiveCasino, SportsBook } from "./routes";

const App = () => {
  return (
    <ThemeProvider
      theme={{
        dark: {
          textColor: "#fff",
        },
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/sportsbook" element={<SportsBook />} />
            <Route path="/livecasino" element={<LiveCasino />} />
            <Route path="/casino" element={<Casino />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
