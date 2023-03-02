import { useContext } from 'react';
import ItemContext from '../../context/ItemContext';
import styles from './StartScreen.module.css';

const StartScreen = () => {
    const ctx = useContext(ItemContext);

    return (
        <div className={styles.statBox}>
            {ctx.isGameStart ? <button onClick={ctx.startGame} className={styles.startBtn}>Let's Play</button> : ''}
            {ctx.gameOver ? <button onClick={ctx.resetGame} className={styles.startBtn}>Reset Game</button> : ''}
        </div>

    )

}

export default StartScreen;