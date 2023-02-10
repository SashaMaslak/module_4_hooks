import React from 'react';
import styles from './UserMenu.module.css';

export default function UserMenu({ onLogOut, user }) {
  return (
    <div className={styles.container}>
      <img
        src={user.avatar}
        alt=""
        width="32"
        height="32"
        className={styles.avatar}
      />
      <p className={styles.name}>Welcome, {user.name}</p>
      <button type="button" onClick={onLogOut}>
        Log out
      </button>
    </div>
  );
}
