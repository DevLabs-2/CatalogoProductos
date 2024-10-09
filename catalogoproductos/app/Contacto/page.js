import NavBar from '../../src/components/NavBar/Navbar';
import styles from "./Contacto.module.css"

function Contacto(){
    return (
        <>
            <div className={styles.page}>
                <NavBar></NavBar>
                <section style={{display: "flex", justifyContent: "center"}}>
                    <div className={styles.contactContainer}>
                        <h2>Formulario de Contacto</h2>
                        <form className={styles.form}>
                            <div className={styles.formGroup}>
                                <label>Nombre:</label>
                                <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre"/>
                            </div>
                            <div className={styles.formGroup}>
                                <label>Apellido:</label>
                                <input type="text" id="apellido" name="apellido" placeholder="Ingresa tu apellido"/>
                            </div>
                            <div className={styles.formGroup}>
                                <label>Email:</label>
                                <input type="email" id="email" name="email" placeholder="Ingresa tu email"/>
                            </div>
                            <div className={styles.formGroup}>
                                <label>Edad:</label>
                                <input type="number" id="edad" name="edad" placeholder="Ingresa tu edad"/>
                            </div>
                            <div className={styles.formGroup}>
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
            
        </>
    )
}
export default Contacto;