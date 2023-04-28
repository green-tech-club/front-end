import './App.css';
import { motion } from "framer-motion"
import Landing from './homepage/landing/landing'
import Navbar from './homepage/navbar/navbar';
import NewsGrid from './homepage/newsgrid/NewsGrid';
import Footer from './homepage/footer/footer';



function App() {
  window.scrollTo(0, 0);
  return (
    <motion.div className="App"
    initial={{ opacity: 0 , x:20}}
    animate={{ opacity: 1 , x:0 }}
    transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <Landing></Landing>
      <NewsGrid></NewsGrid>
      <div className='div1'></div>
      <Footer></Footer>
      <Navbar></Navbar>
    </motion.div>
  );
}

export default App;
