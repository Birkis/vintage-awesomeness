import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/garage.module.css'
import Image from 'next/image'


function Garage() {
  return (
    <div className={styles.garage__container}>
        <h1 className={styles.garage__title}>Garage</h1>

        <div className={styles.car__container}>
            <div className={styles.car__textInfo}>
                <h2>Nickname</h2>
                <div className={styles.car__textInfoItem}>
                    <p>Year</p>
                    <p> some value</p>
                </div>
                <div className={styles.car__textInfoItem}>
                    <p>Make</p>
                    <p> some value</p>
                </div>
                <div className={styles.car__textInfoItem}>
                    <p>Model</p>
                    <p> some value </p>
                </div>
                <div className={styles.car__textInfoItem}>
                    <p>Description</p>
                    <p> some value</p>
                </div>
                <div className={styles.car__textInfoItem}>
                    <p>Drives</p>
                    <p> some value</p>
                </div>
                <div className={styles.car__textInfoItem}>
                    <p>Time in App</p>
                    <p> some value</p>
                </div>
                <div className={styles.car__textInfoItem}>
                    <p>Distance in App</p>
                    <p> some value</p>
                </div>
                <div className={styles.car__textInfoItem}>
                    <p>Pictures</p>
                    <p> some value</p>
                </div>
                <div className={styles.car__textInfoItem}>
                    <p>Status</p>
                    <p> some value</p>
                </div>
                <div className={styles.car__textInfoItem}>
                    <p>Currently Owned</p>
                    <p> some value</p>
                </div>
                <div className={styles.car__textInfoItem}>
                    <p>Sold</p>
                    <p> some value</p>
                </div>
            </div>
            <Image className={styles.card__carPicture} alt="This is a logo" src="/ferrari.webp" width={500} height={500} ></Image>
        </div>

        <button>+ add vehicle</button>
    </div>
  )
}

Garage.propTypes = {}

export default Garage
