import React from 'react';
import styles from "./MenuItemsList.css";
import BlockIcon from "../../../icons/BlockIcon";
import WarningIcon from "../../../icons/WarningIcon";

interface Props {
    postId: string;
}

const MenuItemsList = ({postId}: Props) => {
    return (
        <ul className={styles.menuItemsList}>
            <li className={styles.menuItem} onClick={() => console.log('clicked by', postId)}>
                <BlockIcon/>
                Скрыть
            </li>
            <div className={styles.divider}/>
            <li className={styles.menuItem}>
                <WarningIcon/>
                Пожаловаться
            </li>
            
        </ul>
    );
};

export default MenuItemsList;