import styles from "./../app/page.module.css";

const interests = ["Handball", "Tecnologia", "Viajes", "Programacion"];

const Interests = () => {
  return (
    <div className={styles.interestContainer}>
        <div className={styles.interestsList}>
            {interests.map((interest, index) => (
            <div key={index} className={styles.interestItem}>
                <span>{interest}</span>
                {index < interests.length - 1 && <div className={styles.separator}></div>}
            </div>
            ))}
        </div>
    </div>
  )
}

export default Interests