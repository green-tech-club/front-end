import './App.css';
import { motion } from "framer-motion"
import Landing from './homepage/landing/landing'
import Navbar from './homepage/navbar/navbar';

function App() {
  return (
    <motion.div className="App"
    initial={{ opacity: 0 , x:20}}
    animate={{ opacity: 1 , x:0 }}
    transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <Landing></Landing>
      <div className='div1'></div>
      <Navbar></Navbar>
    </motion.div>
  );
}

export default App;
