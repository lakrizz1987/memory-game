import styles from "./Card.module.css"

const Card = ({img}) =>{
    return (
        <div className={styles.cardBox}>
            <img className={styles.image} src={`/images/${img}`} alt='logo' />
        </div>
    )
}

export default Card;