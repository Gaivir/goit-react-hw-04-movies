import { NavLink } from 'react-router-dom'
import routes from '../../routes'
import styles from './Navigation.module.css'

const Navigation = () => {
    return (
        <nav>
            <ul className={styles.nav}>
        <li>
          <NavLink
            exact
            to={routes.home}
            className={styles.NavLink}
            activeClassName={styles.NavLink__active}
          >Home
          </NavLink>
        </li>
       
        <li>
          <NavLink
            to={routes.movies}
             className={styles.NavLink}
            activeClassName={styles.NavLink__active}
          >Movies
          </NavLink>
        </li>
      </ul>
        </nav>
    )
}

export default Navigation