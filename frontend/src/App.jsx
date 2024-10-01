import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>

        <Routes>
          <Route path='/*' element={<Home />}> </Route>
          <Route path='/projects' element={<Projects />}> </Route>
          <Route path='/about' element={<About />}> </Route>
          <Route path="/blogs" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
