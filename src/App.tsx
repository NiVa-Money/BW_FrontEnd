// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation or layout can be placed here */}
        
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
