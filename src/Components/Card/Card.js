import styles from "./Card.module.css"

const Card = ({ item, handleClick }) => {

    return (
        <div className={styles.cardBox} onClick={() => handleClick(item.id)}>
            <img className={styles.image} src={`/images/${item.img}`} alt='logo' />
        </div>
    )
}

export default Card;