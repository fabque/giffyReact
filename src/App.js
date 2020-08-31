import React, {useState} from 'react';
import './App.css';
import ListOfGifs from "./components/ListOfGifs";

import {Route} from "wouter";

function App() {
const [keyword, setKeyword] = useState('panda')

  return (
    <div className="App">
        <section className="App-content">
            <h1>Giffy</h1>
            <Route component={ListOfGifs}
                   path="/gif/:keyword"/>



        </section>

      </div>
  );
}

export default App;
