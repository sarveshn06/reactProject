import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Footer from './Component/Footer';
import About from './Component/About';
import Contact from './Component/Contact';
import Businesssetup from './Component/Businesssetup';
import Compliances from './Component/Compliances';
import Audit from './Component/Audit';
import Outsourced from './Component/Outsourced';
import Financial from './Component/Financial';
import { BrowserRouter as Router, Routes, route, Link, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/About' element={<About></About>}></Route>
          <Route path='/Contact' element={<Contact></Contact>}></Route>
          <Route path='/Businesssetup' element={<Businesssetup></Businesssetup>}></Route>
          <Route path='/Compliances' element={<Compliances></Compliances>}></Route>
          <Route path='/Audit' element={<Audit></Audit>}></Route>
          <Route path='/Outsourced' element={<Outsourced></Outsourced>}></Route>
          <Route path='/Financial' element={<Financial></Financial>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
