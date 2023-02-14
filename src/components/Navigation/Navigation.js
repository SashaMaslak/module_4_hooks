import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      to="/signup"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Form
    </NavLink>

    <NavLink
      to="/colorpicker"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      ColorPicker
    </NavLink>

    <NavLink
      to="/counter"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Counter (useReducer)
    </NavLink>

    <NavLink
      to="/clock"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Clock
    </NavLink>

    <NavLink
      to="/pokemon"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Pokemons
    </NavLink>
    <NavLink
      to="/skip-first-render"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Skip first render
    </NavLink>
    <NavLink
      to="/friends"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Friends (useMemo)
    </NavLink>
  </nav>
);

export default Navigation;
