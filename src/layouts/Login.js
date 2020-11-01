import React, { useState,useContext } from 'react';
import styles from './login.module.scss';
import {FaUserSecret, FaLock, FaBalanceScale} from 'react-icons/fa';
import {motion} from 'framer-motion';
import AuthContext from '../context/auth/authContext';
import {FaSpinner} from 'react-icons/fa';
const Login = (props) => {
    
    const authContext = useContext(AuthContext);
    const {login,loading,errors} = authContext;

    const [loginInfo,setLoginInfo] = useState({email:'',password:''});

    const changeHandler = e => {
        setLoginInfo({...loginInfo,[e.target.name]:e.target.value});
    }

    const loginClickHandler =async (e) => {
        e.preventDefault();
        await login(loginInfo);
        props.history.push('/');

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
                    {errors &&  <span class={styles.error}>{errors instanceof Array ? errors[0].msg : errors}</span>}
                   
                    <div className={styles.form__group}>
                        <button type="submit" > {loading ?  <FaSpinner /> : "LOGIN"} </button>
                    </div>

                </form>
            </motion.div>
        </div>
    )
}

export default Login
