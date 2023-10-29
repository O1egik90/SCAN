import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as Logo2 } from "./logo2.svg";
import { ReactComponent as UserMenu } from "./menu.svg";
import { ReactComponent as Cross } from "./cross.svg";
import styles from "./Header.module.scss";
import User from "../User/User";
import Menu from "../Menu/Menu";

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    
    const menuClickHandler = () => {
        setMenuOpen(!isMenuOpen);
    }
    
    return (
        <>
            {(isMenuOpen && 
                <div className={styles.parent_menu}>
                    <div className={styles.menu_header_wrapper}>
                        <Logo className={styles.logo} />
                        <Cross className={styles.cross} onClick={menuClickHandler} />
                    </div>
                    <Menu onBtnClick={() => setMenuOpen(false)} />
                </div>)
                ||
                (<div className={styles.parent}>
                    <Logo2 className={styles.logo} />
                    <UserMenu className={styles.menu} onClick={menuClickHandler} />
                    <nav>
                        <NavLink to="/" className={styles.link}>Главная</NavLink>
                        <NavLink to="/" className={styles.link}>Тарифы</NavLink>
                        <NavLink to="/" className={styles.link}>FAQ</NavLink>
                    </nav>
                    <User />
                </div>)
            }
        </>
    );
}

export default Header;