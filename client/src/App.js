import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Quotes from './pages/scripts/quotes';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Quotes/>}/>
    </Routes>
   </Router>
  );
}

export default App;
