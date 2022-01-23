import React, {FC} from 'react';
import styles from './Container.css';

const Container:FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default Container;