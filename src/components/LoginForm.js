import React from 'react'
import styles from './LoginForm.module.css'

const LoginForm = () => {
  return (
    <div>
        <form className={styles.form} action="">
            <label className={styles.label} htmlFor="username">Username</label>
            <input className={styles.input} type="text" />
            <label className={styles.label} htmlFor="password">Password</label>
            <input className={styles.input} type="password" />
            <button className={styles.submit} type="submit">Submit</button>
        </form>
    </div>
  )
}

export default LoginForm