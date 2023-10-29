import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { ReactComponent as Picture1 } from "./pic1.svg";
import { ReactComponent as Picture2 } from "./pic2.svg";
import { ReactComponent as Lamp } from "./lamp.svg";
import { ReactComponent as Aim } from "./aim.svg";
import { ReactComponent as Laptop } from "./laptop.svg";
import styles from "./MainPage.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckToken from "../../components/CheckToken";
import Carousel from "../../components/Carousel/Carousel";
import TariffCards from "../../components/TariffCards/TariffCards";

export default function MainPage() {
    const isAuth = useSelector(state => state.account.isAuth);
    const currentTariff = useSelector(state => state.account.tariff);

    return (
        <>
            <CheckToken unauthRedirect="/" />

            <Header />

            <main className={styles.content}>
                <section className={styles.section1}>
                    <div className={styles.section1__horizontal}>
                        <div className={styles.section1__vertical}>
                            <h1 className={styles.section1__title}>
                                Сервис по поиску<br />
                                публикаций<br />
                                о компании<br />
                                по его ИНН
                            </h1>

                            <span>
                                Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
                            </span>
                            
                            <button className={isAuth ? styles.section1__button : styles.section1__button__unvisible}>
                                {isAuth &&
                                    <Link to="/search">
                                        <span>Запросить данные</span>
                                    </Link>
                                }
                            </button>
                        </div>

                        <Picture1 className={styles.picture1} />
                    </div>
                </section>

                <section className={styles.section2}>
                    <h2>
                        Почему именно мы
                    </h2>

                    <Carousel />

                    <Picture2 className={styles.picture2} />
                </section>

                <section className={styles.section3}>
                    <h2>
                        Наши тарифы
                    </h2>

                    <div className={styles.section3__tariffs_wrapper}>
                        <TariffCards 
                            name="Beginner" 
                            desc="Для небольшого исследования" 
                            svg={<Lamp className={styles.section3__svg} />} 
                            color="yellow" 

                            price="1200"
                            discount="401"

                            price_desc="или 150 ₽/мес. при рассрочке на 24 мес."
                            tariff_contains={["Безлимитная история запросов", "Безопасная сделка", "Поддержка 24/7"]}

                            current={isAuth && currentTariff === 1}
                        />

                        <TariffCards
                            name="Pro" 
                            desc="Для HR и фрилансеров" 
                            svg={<Aim className={styles.section3__svg2} />} 
                            color="azure" 

                            price_desc="или 279 ₽/мес. при рассрочке на 24 мес."
                            tariff_contains={["Все пункты тарифа Beginner", "Экспорт истории", "Рекомендации по приоритетам"]}

                            price="2600"
                            discount="1301"

                            current={isAuth && currentTariff === 2}
                        />

                        <TariffCards
                            name="Business" 
                            desc="Для корпоративных клиентов" 
                            svg={<Laptop className={styles.section3__svg3} />} 
                            color="black" 

                            tariff_contains={["Все пункты тарифа Pro", "Безлимитное количество запросов", "Приоритетная поддержка"]}

                            price="3700"
                            discount="1321"

                            current={isAuth && currentTariff === 3}
                        />
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}