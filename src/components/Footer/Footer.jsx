import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import styles from "./Footer.module.scss";

function Footer() {
    return (
        <div className={styles.parent}>
            <div className={styles.footer_wrapper}>
                <Logo className={styles.logo} />
                <div className={styles.text}>
                    <p>
                        г. Москва, Цветной б-р, 40 <br />
                        +7 495 771 21 11 <br />
                        info@skan.ru
                    </p>
                    <span>Copyright 2022</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;