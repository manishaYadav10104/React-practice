import React from "react";
import ReactDOM from "react-dom/client"; 
import { BrowserRouter, Routes, Route, Link} from "react-router";
import Home from "./src/Home";
import Contact from "./src/Contact";
import About from "./src/About";
import Zero from "./src/Zero";
import Home_detail from "./src/Home_datail";
import Github from "./src/Github";


function App() {
  return (

    <BrowserRouter>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/About">About</Link>

    </nav>

    <Routes>
        <Route path="/" element={<Home></Home>}>
        
        
        </Route>
        <Route path="/Contact" element={<Contact></Contact>}>
        <Route index element={<Zero></Zero>}></Route>
        <Route path="Home_detail" element={<Home_detail></Home_detail>}></Route></Route>

        <Route path="/About" element={<About></About>}></Route>



        <Route path="/Github/:name" element={<Github></Github>}></Route>
    </Routes>
    </BrowserRouter>

)
}

// Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
