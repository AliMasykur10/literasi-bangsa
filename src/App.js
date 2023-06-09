import HomePage from "./pages/homepage/homePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginpage/loginPage";
import Header from "./components/organisms/header/header";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
