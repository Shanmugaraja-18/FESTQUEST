// import React from'react';
// import RegisterPage from "./pages/RegisterPage";

// import LoginPage from "./pages/LoginPage";
// import DashboardPage from "./pages/Dashboard";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import NavBar from './components/NavBar';
// import Footer from './components/Footer/Footer';

// function App() {
//   return (
//     <div className="App">
//         <BrowserRouter>
//         <NavBar/>
//             <Routes>
//                 <Route path="/register" element={<RegisterPage/>} />
//                 <Route path="/login" element={<LoginPage/>} />
//                 <Route path="/dashboard" element={<DashboardPage/>} />
//                 <Route path="/" element={<Home/>} />
//                 <Route path='/about' element={<About />} />
//                 <Route path='/contact' element={<Contact />} />
//             </Routes>
//         <Footer/>
        
//         </BrowserRouter>

        
//     </div>
//   );
// }

// export default App;
import React from'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer/Footer';
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/Dashboard";
import HomePage from "./pages/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Open from "./pages/Open";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<RegisterPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/dashboard" element={<DashboardPage/>} />
                <Route path="/Home" element={<Home/>} />
                <Route path="/" element={<Open/>} />
                <Route path='/about' element={<About />} />
                 <Route path='/contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>

        
    </div>
  );
}

export default App;