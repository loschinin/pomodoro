import React, {ReactNode, useEffect, useState} from 'react';
import styles from "./Dropdown.css";

interface IDropdownProps {
    button: ReactNode;
    children: ReactNode;
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

const NOOP = () => {}

const Dropdown = ({button, children, isOpen, onOpen = NOOP, onClose = NOOP}: IDropdownProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
    useEffect(() => setIsDropdownOpen(isOpen), [isOpen])
    useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])

    const handleOpen = () => {
        if (isOpen === undefined) {
            setIsDropdownOpen(!isDropdownOpen)
        }
    }

    return (
        <div className={styles.container}>
            <div onClick={handleOpen}>
                {button}
            </div>

            {isDropdownOpen && (
                <div className={styles.dropdown}>
                    {children}
                </div>
            )}
            
        </div>
    );
};

export default Dropdown;