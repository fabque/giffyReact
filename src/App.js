import React, {useState} from 'react';
import './App.css';
import ListOfGifs from "./components/ListOfGifs";

import {Link, Route} from "wouter";

function App() {
const [keyword, setKeyword] = useState('panda')

  return (
    <div className="App">
        <section className="App-content">
            <h1>Giffy</h1>
            <Link to='/gif/argentina' >Gifs de Argentina</Link>
            <Route component={ListOfGifs}
                   path="/gif/:keyword"/>



        </section>

      </div>
  );
}

export default App;
