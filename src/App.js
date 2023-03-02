
import { useContext } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './App.css';
import Cards from './Components/Cards/Cards';
import Container from './Components/Container/Container';
import StartScreen from './Components/StartScreen/StartScreen';
import ItemContext from './context/ItemContext';

function App() {
  const ctx = useContext(ItemContext)

  return (

    <div className="App">
      {(ctx.isGameStart && ctx.isInitilaStart) ? <StartScreen /> : ''}
      {ctx.gameOver ? <StartScreen /> : ''}
      <Container>
        <Cards endGame={ctx.endGame} />
      </Container>
    </div>


  );
}

export default App;
