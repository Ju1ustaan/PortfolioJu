import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Project from "./pages/Project";
import Contact from "./components/contact/Contact";



const App = () => {
  return (
    <div className="App">
      <Router>

        <Header/>

        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
