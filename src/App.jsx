import './App.css'
import CreateDonutData from './components/CreateDonutData'
import Home from './components/Home';
import ReadDonutData from './components/ReadDonutData'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UpdateDonutData from './components/UpdateDonutData';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateDonutData />} />
          <Route path="/read" element={<ReadDonutData />} />
          <Route path="/edit/:donutId" element={<UpdateDonutData />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
