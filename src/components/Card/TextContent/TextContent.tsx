import React, {FC} from 'react';
import styles from "./TextContent.css";

const TextContent:FC<{children: string}> = ({children}) => {
    return (
        <p className={styles.cardContent}>
            {children}
        </p>
    );
};

export default TextContent;