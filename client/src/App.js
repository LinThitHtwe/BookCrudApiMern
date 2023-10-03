import NavBar from "./components/NavBar";
import AddBook from "./pages/AddBook";
import Home from "./pages/Home";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdateBook from "./pages/UpdateBook";
import AllGenre from "./pages/AllGenre";
import AddGenre from "./pages/AddGenre";
import UpdateGenre from "./pages/UpdateGenre";

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <NavBar />
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/update/:id" element={<UpdateBook />} />
          <Route path="/genre" element={<AllGenre />} />
          <Route path="/genre/add" element={<AddGenre />} />
          <Route path="/genre/update/:id" element={<UpdateGenre />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
