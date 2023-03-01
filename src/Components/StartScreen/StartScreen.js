import styles from './StartScreen.module.css';

const StartScreen = ({ startGameHandler }) => {
    return (
        <div className={styles.statBox}>
            <button onClick={startGameHandler} className={styles.startBtn}>Let's Play</button>
        </div>

    )

}

export default StartScreen;