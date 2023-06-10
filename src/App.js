import HomePage from "./pages/homepage/homePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsPage from "./pages/newspage/newsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
