import { useEffect } from "react"
import useItems from "../../hooks/useItems"
import Card from "../Card/Card"


const Cards = ({endGame}) => {
    
    const [items,isAllCardsCorrect,handleClick] = useItems();

    useEffect(()=>{
        if(isAllCardsCorrect){
            endGame();
        }
    },[isAllCardsCorrect,endGame])

 

    return (
        items.map((item, index) => <Card handleClick={handleClick} key={index} id={index} item={item} />)
    )
}

export default Cards;