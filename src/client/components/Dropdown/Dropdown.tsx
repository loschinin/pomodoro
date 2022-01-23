import React, {useState} from 'react';
import styles from "./Dropdown.css";
import Button from "../Card/Button/Button";

interface IDropdownProps {
    list: string[]
}

const initialValue = 'Default Value'
const isEqual = (first: string, second: string) => first === second;

const Dropdown = ({list}: IDropdownProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selected, setSelected] = useState(initialValue)

    return (
        <div tabIndex={0} onBlur={() => setIsDropdownOpen(false)}>
            <Button text={selected} onClick={() => setIsDropdownOpen(!isDropdownOpen)}/>
            {isDropdownOpen && (
                <div className={styles.items}>
                    {!isEqual(initialValue, selected) && <div className={styles.item} onClick={() => onClickItemHandler(initialValue)}>{initialValue}</div>}
                    {list.map(item => !isEqual(item, selected) && (
                        <div key={item} className={styles.item} onClick={() => onClickItemHandler(item)}>
                            {item}
                        </div>
                    ))}
                </div>
            )}
            
        </div>
    );

    function onClickItemHandler(item: string) {
        setIsDropdownOpen(false)
        setSelected(item)
    }
};

export default Dropdown;