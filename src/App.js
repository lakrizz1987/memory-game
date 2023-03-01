
import { useState } from 'react';
import './App.css';
import Cards from './Components/Cards/Cards';
import Container from './Components/Container/Container';
import StartScreen from './Components/StartScreen/StartScreen';


function App() {

  const [isGameStart, setIsGameStart] = useState(false);

  function startGame() {
    setIsGameStart(true)
  }

  return (

    <div className="App">
      {isGameStart ? '' : <StartScreen startGameHandler={startGame} />}
      <Container>
        <Cards />
      </Container>
    </div>


  );
}

export default App;
