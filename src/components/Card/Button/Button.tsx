import React, {FC} from 'react';
import styles from "./Button.css";

const Button:FC<{text: string, id?: number, onClick?(): void, disabled?: boolean}> = ({onClick, text, disabled}) => {
    return (
        <div className={styles.button} style={{ opacity: disabled ? 0.5 : 1, cursor: disabled ? 'default' : 'pointer' }} onClick={onClick}>
            {text}
        </div>
    );
};

export default Button;