
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Home/header';
import RouterF from './routes/routes';
import './App.css';


function App() {


  return (
    <div className="App">
      <Router>
        <Header />
        <RouterF />
      </Router>

    </div>
  );
}

export default App;
