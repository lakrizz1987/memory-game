import { createContext, useState } from "react";

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
    const [items, setItems] = useState([
        { id: 1, img: 'benzema.jpg', stat: '' },
        { id: 1, img: 'benzema.jpg', stat: '' },
        { id: 2, img: 'levandovski.jpg', stat: '' },
        { id: 2, img: 'levandovski.jpg', stat: '' },
        { id: 3, img: 'mbappe.jpg', stat: '' },
        { id: 3, img: 'mbappe.jpg', stat: '' },
        { id: 4, img: 'messi.jpg', stat: '' },
        { id: 4, img: 'messi.jpg', stat: '' },
        { id: 5, img: 'Neymar.jpg', stat: '' },
        { id: 5, img: 'Neymar.jpg', stat: '' },
        { id: 6, img: 'ronaldo.jpg', stat: '' },
        { id: 6, img: 'ronaldo.jpg', stat: '' }
    ].sort(() => Math.random() - 0.5));

    const [prevId, setPrevId] = useState(-1);
    const [isReadyToClick, setIsReadyToClick] = useState(true);
    const [isAllCardsCorrect, setIsAllCardCorrect] = useState(false);
    const [isGameStart, setIsGameStart] = useState(true);
    const [gameOver, setGameOver] = useState(false);

    function resetGame(){
        setIsGameStart(true);
        setGameOver(false);
        setItems(state=>{
            state.forEach(card=>card.stat = '')
            return [...state]
        })
    }

    function endGame() {
        setGameOver(true)

    }

    function startGame() {
        setIsGameStart(false)
    }


    function check(current) {
        if (items[current].id === items[prevId].id) {
            setItems(state => {
                state[current].stat = 'correct';
                state[prevId].stat = 'correct';
                let isOver = true;

                for (const el of state) {
                    if (el.stat !== 'correct') {
                        isOver = false;
                        break;
                    }
                }
                if (isOver) {
                    setIsAllCardCorrect(true);
                    endGame()
                }
                return [...state]
            });

            setPrevId(-1);
        } else {
            setIsReadyToClick(false);
            setItems(state => {
                state[current].stat = 'wrong';
                state[prevId].stat = 'wrong';
                return [...state];
            });
            setTimeout(() => {
                setItems(state => {
                    state[current].stat = '';
                    state[prevId].stat = '';
                    return [...state];
                });

                setPrevId(-1);
                setIsReadyToClick(true);
            }, 1000);
        }
    };

    const handleClick = (id) => {
        if (items[id].stat === '' && isReadyToClick) {
            if (prevId === -1) {
                setItems(state => {
                    state[id].stat = 'active';
                    return [...state];
                })
                setPrevId(id);
            } else {
                check(id);
            }
        };

    };


    return (
        <ItemContext.Provider value={{
            items,
            isAllCardsCorrect,
            handleClick,
            isGameStart,
            gameOver,
            endGame,
            startGame,
            resetGame
        }}>
            {children}
        </ItemContext.Provider>
    )
}

export default ItemContext;