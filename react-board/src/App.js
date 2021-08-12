import React from 'react';
import Container from './container/Container';
import "./App.css";
import "./Board.css"
import Header from './component/Header';
import Footer from './component/Footer';
function App() {
  return ( 
      <div className="table">
        <Header/>
        <Container />
        <Footer/>
      </div>
  )
}

export default App;
