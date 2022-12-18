import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'


export function Navbar() {
  return (
    <div className={styles.navbar__container}>

      <div className="navbar__logo">
        <Link href="/">
          <h1>logo</h1>
        </Link>
      </div>

      <ul className={styles.navbar__links}>
        <Link className={styles.navbar__linkItem} href="/garage">Garage</Link>
        <Link className={styles.navbar__linkItem} href="/friends">Friends</Link>
        <Link className={styles.navbar__linkItem} href="/drives">Drives</Link>
        <Link className={styles.navbar__linkItem} href="/account">Profile</Link>
      </ul>
    </div>
  )
}

