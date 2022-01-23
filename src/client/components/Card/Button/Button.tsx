import React, {FC} from 'react';
import styles from "./Button.css";

const Button:FC<{id: number}> = ({id}) => {
    return (
        <div className={styles.button} onClick={() => console.log(`clicked ${id}`)}>
            Click me
        </div>
    );
};

export default Button;