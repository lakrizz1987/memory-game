import './Card.css'

const Card = ({ item, handleClick,id }) => {
        const itemClass = item.stat ? ' active ' + item.stat : ''
    return (
        <div className={'cardBox' + itemClass}  onClick={() => handleClick(id)}>
            <img className='imageFootboler'  src={`/images/${item.img}`} alt='logo' />
        </div>
    )
}

export default Card;