import { useContext} from "react"
import ItemContext from "../../context/ItemContext";
import Card from "../Card/Card"


const Cards = () => {
    
    const ctx = useContext(ItemContext);
    
    return (
        ctx.items.map((item, index) => <Card handleClick={ctx.handleClick} key={index} id={index} item={item} />)
    )
}

export default Cards;