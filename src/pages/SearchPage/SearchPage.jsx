import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { ReactComponent as List } from "./list.svg";
import { ReactComponent as Folders } from "./folders.svg";
import { ReactComponent as Raketa } from "./raketa.svg";
import styles from "./SearchPage.module.scss";
import CheckToken from "../../components/CheckToken";
import RequestWindow from "../../components/RequestWindow/RequestWindow";

export default function SearchPage() {
    return (
        <>
            <CheckToken unauthRedirect="/" />
            <Header />
            <main className={styles.content}>
                <h1>
                    Найдите необходимые данные в пару кликов.
                </h1>
                <h2>
                    Задайте параметры поиска. <br />
                    Чем больше заполните, тем точнее поиск
                </h2>
                <RequestWindow />
                <List className={styles.document} />
                <Folders className={styles.folders} />
                <Raketa className={styles.picture} />
            </main>
            <Footer />
        </>
    );
}