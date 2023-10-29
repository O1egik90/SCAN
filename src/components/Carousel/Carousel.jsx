import React from "react";
import { ReactComponent as Watch } from "./watch.svg";
import { ReactComponent as Loop } from "./loop.svg";
import { ReactComponent as Shield } from "./shield.svg";
import { ReactComponent as Arrow } from "./arrow.svg";
import Slider from "react-slick";
import styles from "./Carousel.module.scss";

function Carousel() {
    const PrevArrow = ({ currentSlide, slideCount, ...props }) => 
        <button {...props}>
            <Arrow className={styles.slider__arrow_prev} />
        </button>;

    const NextArrow = ({ currentSlide, slideCount, ...props }) =>
        <button {...props}>
            <Arrow className={styles.slider__arrow_next} />
        </button>;

    const slider_settings = {
        className: styles.slider,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 3,
        slide: "article",
        autoplay: true,
        autoplaySpeed: 10000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,

        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...slider_settings}>
            <article className={styles.slider__item}>
                <div className={styles.slider__item__wrapper}>
                    <Watch className={styles.slider__svg} />
                    <span>Высокая и оперативная скорость обработки заявки</span>
                </div>
            </article>

            <article className={styles.slider__item}>
                <div className={styles.slider__item__wrapper}>
                    <Loop className={styles.slider__svg} />
                    <span>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</span>
                </div>
            </article>

            <article className={styles.slider__item}>
                <div className={styles.slider__item__wrapper}>
                    <Shield className={styles.slider__svg} />
                    <span>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</span>
                </div>
            </article>

            <article className={styles.slider__item}>
                <div className={styles.slider__item__wrapper}>
                    <Watch className={styles.slider__svg} />
                    <span>Высокая и оперативная скорость обработки заявки</span>
                </div>
            </article>

            <article className={styles.slider__item}>
                <div className={styles.slider__item__wrapper}>
                    <Loop className={styles.slider__svg} />
                    <span>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</span>
                </div>
            </article>

            <article className={styles.slider__item}>
                <div className={styles.slider__item__wrapper}>
                <Shield className={styles.slider__svg} />
                <span>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</span>
                </div>
            </article>
        </Slider>
    );
}

export default Carousel;