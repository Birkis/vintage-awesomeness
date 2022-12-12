import styles from '../styles/Login.module.css'


export default function Login () {



    return (
        <div className={styles.wrapper}>

            <h1>Login</h1>

            <form action="submit" className={styles.login__form}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="" />
                <label htmlFor="email">Email</label>
                <input type="email" name="" id="" />
                <label htmlFor="password">Password</label>
                <input type="password" name="" id="" />
                <button type="submit" className={styles.login__button}>Login</button>
            </form>
            <p>Don't have an account? <a href="">create</a> one here</p>
        </div>
    )

}

