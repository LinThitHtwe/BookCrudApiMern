import NavBar from "./components/NavBar";
import AddBook from "./pages/AddBook";
import Home from "./pages/Home";
import useFetch from "./useFetch";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdateBook from "./pages/UpdateBook";

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/update/:id" element={<UpdateBook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
