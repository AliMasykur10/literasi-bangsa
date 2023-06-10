import HomePage from "./pages/homepage/homePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsPage from "./pages/newspage/newsPage";
import CategoriPage from "./pages/categorypage/categoriPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="categori" element={<CategoriPage />} />
      </Routes>
    </Router>
  );
}

export default App;
