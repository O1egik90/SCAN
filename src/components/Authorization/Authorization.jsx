import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as Google } from "./google.svg";
import { ReactComponent as Facebook } from "./facebook.svg";
import { ReactComponent as Yandex } from "./yandex.svg";
import { ReactComponent as Padlock } from "./padlock.svg";
import styles from "./Authorization.module.scss";
import { useDispatch } from "react-redux";
import Account from "../../services/Account";
import { useNavigate } from "react-router-dom";
import { setAuth } from "../../storage/actions";

function Authorization() {
    const dispatch = useDispatch();
    
    const navigate = useNavigate();

    const loginBtnRef = useRef();
    const passwordInputRef = useRef();

    const [loginValue, setLoginValue] = useState("");
    const [passValue, setPassValue] = useState("");

    const [isLoginError, setIsLoginError] = useState(false);
    const [isPassError, setIsPassError] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    const onLoginChange = (event) => {
        setLoginValue(event.target.value);
        setIsLoginError(!event.target.value);
    };

    const onPasswordChange = (event) => {
        setPassValue(event.target.value);
        setIsPassError(!event.target.value);
    };

    const validate = () => {
        setIsCompleted(!isLoginError && !isPassError && loginValue && passValue);
    }
    
    useEffect(validate);

    async function onLoginClick() {
        loginBtnRef.current.disabled = true;

        await Account.login(loginValue, passValue)
            .then(response => {
                dispatch(setAuth(true));
                localStorage.setItem("token", response.data.accessToken);
                localStorage.setItem("expire", response.data.expire);
                navigate("/");
            })
            .catch(() => {
                setIsPassError(true);
            });
    }

    const onLoginKeyDown = (event) => {
        if (event.code === "Enter")
            passwordInputRef.current.focus();
    }

    const onPasswordKeyDown = (event) => {
        if (event.code === "Enter")
            onLoginClick();
    }

    return (
        <article className={styles.parent}>
            <div className={styles.slide_buttons_container}>
                <button className={styles.slide_button}>Войти</button>
                <button className={styles.slide_button__disabled} disabled>Зарегистрироваться</button>
            </div>

            <form className={styles.inputs_container}>
                <span>Логин или номер телефона:</span>
                <input 
                    id="login" 
                    className={isLoginError ? styles.input__error : ""} 
                    type="text" 
                    onChange={onLoginChange} 
                    pattern="[A-Za-zА-Яа-яЁё][0-9]{5,10}" 
                    maxLength={25} 
                    autoComplete="on" 
                    onKeyDown={onLoginKeyDown} 
                    required 
                    tabIndex={1}
                />
                {isLoginError && <span className={styles.error_label}>Введите корректные данные</span>}

                <span>Пароль:</span>
                <input 
                    id="password" 
                    className={isPassError ? styles.input__error : ""} 
                    type="password" 
                    onChange={onPasswordChange} 
                    maxLength={25} 
                    autoComplete="on" 
                    ref={passwordInputRef} 
                    onKeyDown={onPasswordKeyDown}
                    required 
                    tabIndex={2}
                />
                {isPassError && <span className={styles.error_label}>Неправильный пароль</span>}
            </form>

            <button className={styles.login_button} ref={loginBtnRef} onClick={onLoginClick} disabled={!isCompleted}>Войти</button>

            <button className={styles.pass_recover_button}>Восстановить пароль</button>

            <div className={styles.svgs_container}>
                <span>Войти через:</span>
                <div className={styles.svgs}>
                    <Google className={styles.svg} />
                    <Facebook className={styles.svg} />
                    <Yandex className={styles.svg} />
                </div>
            </div>

            <Padlock className={styles.lock} />
        </article>
    );
}
export default Authorization;