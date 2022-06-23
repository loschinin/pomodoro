import React, {FC} from 'react';
import styles from "./Card.css";
import Title from "./Title/Title";
import TextContent from "./TextContent/TextContent";

// import Menu from "./Menu/Menu";

const Card:FC<{ card: string, thumbnail: string}> = ({card, thumbnail}) => {
    return (
        <div className={styles.card}>
            <Title title={card} />
            <div className={styles.imgText}>
                {/*<Menu/>*/}
                <TextContent>{card}</TextContent>
                <img src={thumbnail} alt={thumbnail}/>

            </div>
        </div>
    );
};

export default Card;