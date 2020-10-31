import React, { useState,useContext } from 'react';
import styles from './login.module.scss';
import {FaUserSecret, FaLock, FaBalanceScale} from 'react-icons/fa';
import {motion} from 'framer-motion';
import AuthContext from '../context/auth/authContext';
const Login = () => {
    
    const authContext = useContext(AuthContext);
    const {login} = authContext;

    const [loginInfo,setLoginInfo] = useState({email:'',password:''});

    const changeHandler = e => {
        setLoginInfo({...loginInfo,[e.target.name]:e.target.value});
    }

    const loginClickHandler = (e) => {
        e.preventDefault();
        login(loginInfo);
    }
    return (
        <div className={styles.login}>
            <motion.div  animate={{transform:"scale(1)" , opacity: 1}} transition={{
                duration: 0.5
            }} className={styles.login__box}>
                <div className={styles.login__head}>
                    <h1>Admin Login</h1>
                </div>
                <h2>Pars Afshin Institute </h2>
                <form className={styles.login__form} onSubmit={loginClickHandler}>
                    <div className={styles.form__group}>
                        <input type="text" name="email" id="email" required
                            value={loginInfo.email}
                            onChange={changeHandler}
                        />
                        <label htmlFor="email" className={styles.label_name}>Email</label>
                        <span className={styles.input_bar}></span>
                        <FaUserSecret className={styles.icon_input}/>
                    </div>
                    <div className={styles.form__group}>
                        <input type="password" name="password" id="password" required
                            value={loginInfo.password}
                            onChange={changeHandler}
                        />
                        <label htmlFor="email" className={styles.label_name}>Password</label>
                        <span className={styles.input_bar}></span>
                        <FaLock className={styles.icon_input} /> 
                    </div>
                    <div className={styles.form__group}>
                        <button type="submit" >LOGIN</button>
                    </div>
                </form>
            </motion.div>
        </div>
    )
}

export default Login
