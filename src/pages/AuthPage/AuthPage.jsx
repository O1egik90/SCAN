import React, { useEffect } from "react";
import Authorization from "../../components/Authorization/Authorization";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { ReactComponent as PeopleWithKey } from "./peopleKey.svg";
import styles from "./AuthPage.module.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
    const isAuth = useSelector(state => state.account.isAuth);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth) navigate("/");
    });
    return (
        <>
            <Header />
            <main className={styles.content}>
                <div className={styles.flex_container}>
                    <span className={styles.title}>
                        Для оформления подписки 
                        на тариф, необходимо авторизоваться.
                    </span>
                    <Authorization />
                </div>
                <PeopleWithKey className={styles.picture} />
            </main>
            <Footer />
        </>
    );
}

