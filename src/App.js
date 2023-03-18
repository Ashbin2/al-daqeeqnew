import Homepg from "./components/home/Homepg";
import {BrowserRouter , Routes,Route } from 'react-router-dom'
import Navbar from "./components/header/Navbar";
import Footbar from "./components/footer/Footbar";
import Aboutpg from "./components/pages/Aboutpg";
import Product from "./components/products/Product";
import Contact from "./components/contacts/Contact";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Rights from "./components/rights/Rights";

function App() {
  return (
 <>
 <Navbar/>
 <BrowserRouter>
    
    <Routes>
      
      <Route path="/" element={<Homepg />} />
      <Route path="/about" element={<Aboutpg/>} />
      <Route path="/products" element={<Product/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
  </BrowserRouter>
  <Footbar/>
  <Rights/>
  </>
  )
}

export default App;
