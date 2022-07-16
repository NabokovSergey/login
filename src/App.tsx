import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <section className="section">
                <div className='component'>
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <div className="wrap">
                    <button className='button'> Exit</button>
                </div>
            </section>
        </div>
    );
}

export default App;
