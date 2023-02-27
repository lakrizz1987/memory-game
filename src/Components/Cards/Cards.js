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

    return (
        items.map((item,index) => <Card key={index} img={item.img} />)
    )
}

export default Cards;