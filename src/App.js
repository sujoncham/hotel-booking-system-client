import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/Footer/Footer';
import Hotels from "./components/Hotels/Hotels";
import Navbar from './components/Navbar/Navbar';
import About from "./components/Pages/About";
import Admin from "./components/Pages/Admin";
import Blog from "./components/Pages/Blog";
import Booking from "./components/Pages/Booking";
import Contact from "./components/Pages/Contact";
import Home from './components/Pages/Home';
import Page404 from "./components/Pages/Page404";
// https://www.youtube.com/watch?v=k3Vfj-e1Ma4

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/booking' element={<Booking></Booking>}></Route>
        <Route path='/hotels' element={<Hotels></Hotels>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/admin' element={<Admin></Admin>}></Route>
        <Route path='*' element={<Page404></Page404>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
