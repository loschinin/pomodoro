import React from 'react';
import styles from "./Menu.css";
import MenuIcon from "../../icons/MenuIcon";
import Dropdown from "../../Dropdown/Dropdown";
import MenuItemsList from "./MenuItemsList/MenuItemsList";

const Menu = () => {
    return (
        <div className={styles.menu}>
            <Dropdown button={
                <button className={styles.menuButton}>
                    <MenuIcon />
                </button>
                }
            >
                <div className={styles.dropdown}>
                    <MenuItemsList postId="12345"/>
                    <button className={styles.closeButton}>
                        Закрыть
                    </button>
                </div>
            </Dropdown>
        </div>
    );
};

export default Menu;