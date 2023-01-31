import SearchBar from "./searchBar/SearchBar"
import styles from './Nav.module.css'
import { Link } from "react-router-dom";
import {BiLogOut} from 'react-icons/bi'
import {MdOutlineFavorite} from 'react-icons/md'
import {SiAboutdotme} from 'react-icons/si'
import logo from '../../assets/logo.png'

const Nav = ({onSearch}) => {
    return(
            <ul className={styles.list}>
                <li className={styles.li}><Link to='home' className={styles.links}>
                    <img src={logo} alt="logo" className={styles.img}/>
                </Link> 
            </li>
            <li className={styles.li}>
                <Link to='about' className={styles.links}>
                    <h2>About<SiAboutdotme/></h2>
                </Link>
            </li>
            <li className={styles}>
                    <SearchBar onSearch={onSearch}/>    
            </li>
            <li className={styles.li}>
                <Link to="/favorites" className={styles.links}>
                    <h2><MdOutlineFavorite/>Favoritos</h2>
                </Link>
            </li>
            <li className={styles.li}>
                <Link to="/" className={styles.links} >
                    <h2><BiLogOut/>logout</h2>
                </Link>
            </li>
            </ul>    
    )
}

export default Nav;