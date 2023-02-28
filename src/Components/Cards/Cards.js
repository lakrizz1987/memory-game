import { useState } from "react"
import Card from "../Card/Card"


const Cards = () => {
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
    ].sort(() => Math.random() - 0.5))

    const [prevId, setPrevId] = useState(-1);

    function check(current) {
        if (items[current].id === items[prevId].id) {
            setItems(state => {
                state[current].stat = 'correct';
                state[prevId].stat = 'correct';
                return [...state]
            })
            setPrevId(-1)
        } else {
            setItems(state => {
                state[current].stat = 'wrong';
                state[prevId].stat = 'wrong';
                return [...state]
            })
            setTimeout(() => {
                setItems(state => {
                    state[current].stat = '';
                    state[prevId].stat = '';
                    return [...state]
                })
                
                setPrevId(-1)
            }, 1000)
        }
    }

    const handleClick = (id) => {
        if(items[id].stat === ''){
            if (prevId === -1) {
                setItems(state => {
                    state[id].stat = 'active';
                    return [...state]
                })
                setPrevId(id)
            } else {
                check(id)
            }
        }
        
    }

    return (
        items.map((item, index) => <Card handleClick={handleClick} key={index} id={index} item={item} />)
    )
}

export default Cards;