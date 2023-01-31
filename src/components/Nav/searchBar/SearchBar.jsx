import styles from './SearchBar.module.css'
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs'
function SearchBar({onSearch}) {

   const [character, setCharacter] = useState('')

   const handleChange = (event) => {
      setCharacter(event.target.value)
   }

   return (
      <div className={styles.searchBox}>
         <input type='search' className={styles.searchInput} value={character} onChange={handleChange} placeholder="Search" />
         <button onClick={() => onSearch(character)} className={styles.searchButton}> <BsSearch className={styles.search}/></button> 
         </div>
   );
}

export default SearchBar;
