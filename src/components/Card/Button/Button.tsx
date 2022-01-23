import React, {FC} from 'react';
import styles from "./Button.css";

const Button:FC<{text: string, id?: number, onClick?(): void}> = ({onClick, text}) => {
    return (
        <div className={styles.button} onClick={onClick}>
            {text}
        </div>
    );
};

export default Button;