import React, {useState} from 'react';
import styles from "./Dropdown.css";
import MenuIcon from "../icons/MenuIcon";

interface IDropdownProps {
    list: string[]
}

const Dropdown = ({list}: IDropdownProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div>
            <button className={styles.menuButton} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <MenuIcon/>
            </button>

            {isDropdownOpen && (
                <div className={styles.dropdown}>
                    {list.map((item, index) => index !== list.length - 1 ? (
                        <div key={item} onClick={() => onClickItemHandler(item)}>
                            {item}
                        </div>
                    ) : (
                        <button key={item} className={styles.closeButton} onClick={() => setIsDropdownOpen(false)}>
                            <div className={styles.text}>{item}</div>
                        </button>
                    ))}
                </div>
            )}
            
        </div>
    );

    function onClickItemHandler(item: string) {
        setIsDropdownOpen(false)
    }
};

export default Dropdown;