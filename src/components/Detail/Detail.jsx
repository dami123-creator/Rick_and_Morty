import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Detail.module.css"

function Detail(){
    const { detailId } = useParams();  
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
            if (char.name) {
                setCharacter(char);
            } else {
                window.alert("No hay personajes con ese ID");
            }
            })
            .catch((err) => {
            window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    }, [detailId]);

    return(
        <div className={styles.div}>
            <button className={styles.boton}>
                <Link to='/home' >Home</Link>
            </button>
            <h1 className={styles.nombre}>{character?.name}</h1>
            <p className={styles.info}>{character?.status}</p>
            <p className={styles.info}>{character?.species}</p>
            <p className={styles.info}>{character?.gender}</p>
            <p className={styles.info}>{character?.origin?.name}</p>
            <img className={styles.img} src={character?.image} alt={character.name} />
        </div>
    )
}

export default Detail;