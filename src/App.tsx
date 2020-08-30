import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/card";

function App() {
  return (
    <div className='container'>
      <Card img={logo}
            header={<h1>Test</h1>}
            body={<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>}/>
      <Card img={logo}
            header={<h1>Test</h1>}
            body={<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>}/>
      <Card img={logo}
            header={<h1>Test</h1>}
            body={<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>}/>
      <Card img={logo}
            header={<h1>Test</h1>}
            body={<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>}/>
    </div>
  );
}

export default App;
