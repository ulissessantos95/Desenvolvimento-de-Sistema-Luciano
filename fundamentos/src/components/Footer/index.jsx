import styles from "./footer.module.css"

const Footer = ({titulo})=>{
    return(
        <>
        <header className={styles.footer}>
        <h2 className={styles.title}>{titulo}</h2> 
        
        </header>
        </>
    )
}

export default Footer