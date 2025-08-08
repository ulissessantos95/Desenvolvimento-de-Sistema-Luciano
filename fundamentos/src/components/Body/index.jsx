import styles from "./body.module.css"
import Card from "./Card"


function Body() {
    const usuarios = [
        {nome: "Vavá", idade: 46, cidade: "Floripa"},
        {nome: "Rivelino", idade: 52, cidade: "Floripa"},
        {nome: "Ulisses", idade: 30, cidade: "Floripa"}
    ]
  return (

    <main className={styles.body}>
        <h2>Usuario Cadastrado:</h2>
        <div className={styles.cardContainer}>
            <Card />

        </div>


    </main>
  )
}

export default Body
