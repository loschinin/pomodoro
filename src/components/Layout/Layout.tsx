import React, {FC} from 'react';
import styles from './layout.css'

const Layout:FC<{ children: React.ReactNode }> = ({children} ) => {
    return (
        <div className={styles.layout}>
            {children}
        </div>
    );
};

export default Layout;