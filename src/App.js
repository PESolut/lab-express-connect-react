// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./Pages/Home";
import Index from "./Pages/Index"
import New from "./Pages/New"

// COMPONENTS
import NavBar from "./Components/NavBar";


function App() {
  return (
  <div className="App">
    <Router>
      <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/index" element={<Index/>} />
        </Routes>
      </main>
    </Router>
  </div>
  )
}

export default App;
