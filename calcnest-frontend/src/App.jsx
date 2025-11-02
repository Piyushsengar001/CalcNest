     import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
     import Navbar from './components/Navbar.jsx';
     import Footer from './components/Footer.jsx';
     import Home from './pages/Home.jsx';
     import CategoryPage from './pages/CategoryPage.jsx';
     import CalculatorPage from './pages/CalculatorPage.jsx'; 
     import Feature from './pages/Feature.jsx';
     import About from './pages/About.jsx';
    
     function App() {
       return (
         <Router>
           <Navbar />
           <main>
             <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/category/:type" element={<CategoryPage />} />
               <Route path="/category/:type/:calculatorId" element={<CalculatorPage />} /> 
               <Route path="/feature" element={<Feature />} />
               <Route path="/about" element={<About />} />
              
             </Routes>
           </main>
           <Footer />
         </Router>
       );
     }

     export default App;
     