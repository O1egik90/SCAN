import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./Page404.module.scss";
import CheckToken from "../../components/CheckToken";

function Page404() {
    return (
        <>
            <CheckToken unauthRedirect="/" />
            <Header />
            <main className={styles.content}>
                <h1>ОШИБКА! 404</h1> 
            </main>
            <Footer />
        </>
    );
}

export default Page404;