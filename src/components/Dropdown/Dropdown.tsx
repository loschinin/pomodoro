import React, {ReactNode, useEffect, useState} from 'react';
import styles from "./Dropdown.css";
import ReactDOM from "react-dom";

interface IDropdownProps {
    button: ReactNode;
    children: ReactNode;
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

const NOOP = () => {}

const Dropdown = ({button, children, isOpen, onOpen = NOOP, onClose = NOOP}: IDropdownProps) => {
    const node = document.querySelector('#drop_down_root')
    if (!node) return null;

    const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
    useEffect(() => setIsDropdownOpen(isOpen), [isOpen])
    useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])

    const handleOpen = () => {
        if (isOpen === undefined) {
            setIsDropdownOpen(!isDropdownOpen)
        }
    }

    return (
        <div>
            <div onClick={handleOpen}>
                {button}
            </div>

            {isDropdownOpen && ReactDOM.createPortal((
                <div className={styles.dropdown}>
                    {children}
                </div>
            ), node)}
        </div>
    )
};

export default Dropdown;