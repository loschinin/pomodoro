import React from 'react';
import MenuIcon from "../../icons/MenuIcon";
import Dropdown from "../../Dropdown/Dropdown";
import MenuItemsList from "./MenuItemsList/MenuItemsList";

const Menu = () => {
    return (
        <>
            <Dropdown button={
                <div style={{width: '31px', height: '31px', borderRadius: '50%', backgroundColor: '#f1f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(90deg)', cursor: 'pointer'}}>
                    <MenuIcon />
                </div>
                }
            >

                <MenuItemsList postId="12345"/>
                <div style={{padding: '10px 16px', backgroundColor: '#D9D9D9', textAlign: 'center', fontSize: '12px', color: '#666666', borderRadius: '0 0 3px 3px'}}>
                    Закрыть
                </div>
            </Dropdown>

        </>
    );
};

export default Menu;