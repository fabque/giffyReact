import React, {useState, useEffect} from 'react';
import './App.css';
import getGifs from "./services/getGifs";
import Gif from "./components/Gif";

function App() {
const [gifs, setGifs] = useState([])

    useEffect(function (){
        getGifs({keyword: 'programming'}).then(gifs => setGifs(gifs))
    }, [])

  return (
    <div className="App">
        <section className="App-content">
            {
                gifs.map(sGif =>
                    <Gif key={sGif.id} title={sGif.title} url={sGif.url} id={sGif.id} ></Gif>
                )
            }
        </section>

      </div>
  );
}

export default App;
