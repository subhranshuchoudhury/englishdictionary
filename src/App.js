import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Wel from './components/Wel';


function App() {
  const [searchVal, setsearchVal] = useState("welcome");
  const [Wordinformation, setinformation] = useState([]);
  const [welScreen, setwelScreen] = useState(true);

  const loadData = async () => {
    try {
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchVal}`
      const response = await fetch(url);
      const data = await response.json();
      const finalData = data[0];

      // destructure


      const sourceUrl = finalData.sourceUrls[0];
      const meaningofWord = [];
      for (let i = 0; i < finalData.meanings.length; i++) {
        meaningofWord.push(finalData.meanings[i])
      }
      const {audio} = finalData.phonetics[1];
      const { word, phonetic } = finalData;

      const GatheredData = {
        sourceUrl, word, phonetic, meaningofWord,audio
      }

      setinformation(GatheredData);



    } catch (error) {
      console.log(error);

    }
  }

  const setWel = () => {
    setwelScreen(false);
  }

  useEffect(() => {
    loadData()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='mainContainer'>
      <div className='searchBox'></div>
      {
        welScreen ? <Wel callfn={setWel} /> : <div><div className='searchBox'>
          <input placeholder='Type a word..' value={searchVal} onChange={(e) => { setsearchVal(e.target.value) }}></input>
          <button onClick={loadData}>Search</button>
        </div> <Card info={Wordinformation} /></div>
      }

    </div>
  );
}

export default App;
