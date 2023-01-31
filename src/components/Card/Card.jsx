import styles from "./Card.module.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../../redux/action";

function Card({name, species, gender, image, onClose, id}) {
   const dispatch = useDispatch();
   const myFavorite = useSelector(state => state.myFavorite)
   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false)
         dispatch(deleteFavorite(id))
      }else{
         setIsFav(true)
         dispatch(addFavorite({name, species, gender, image, onClose, id}))
      }

   }

   useEffect(() => {
      myFavorite.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorite])

   return (
      <div className={styles.contenedor}>
         {
            isFav ? (<button onClick={handleFavorite}>❤️</button>) 
            : (<button onClick={handleFavorite}>🤍</button>)
         }


         <button className={styles.botoncito} onClick={() => onClose()}>X</button>

         <Link to={`/detail/${id}`} className={styles.vinculo}>
            <h2 className={styles.title}>{name}</h2>
         </Link>

         <h2 >{species}</h2>
         <h2 >{gender}</h2>
         <img className={styles.img} src={image} alt="imagen" /> 
      </div>
   );
}


export default Card;
