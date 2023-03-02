
import { useState } from 'react';
import './App.css';
import Cards from './Components/Cards/Cards';
import Container from './Components/Container/Container';
import StartScreen from './Components/StartScreen/StartScreen';


function App() {

  const [isGameStart, setIsGameStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  
  
  function endGame(){
    setGameOver(true)

  }

  function startGame() {
    setIsGameStart(true)
  }

  return (

    <div className="App">
      {isGameStart ? '' : <StartScreen startGameHandler={startGame} />}
      <Container>
        <Cards endGame={endGame} />
      </Container>
    </div>


  );
}

export default App;
