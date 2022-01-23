import React, {FC} from 'react';
import styles from "./Card.css";
import Title from "./Title/Title";
import TextContent from "./TextContent/TextContent";
import {Card} from "../App";
import Dropdown from "../Dropdown/Dropdown";
import Button from "./Button/Button";

    /** Описание логики разделения компонента */
    // 1. Компонент Card имеет заголовок, текстовой контент и кнопку
    // 2. Заголовок Title инкапсулирует тэг <h2>
    // 3. TextContent принимает в качестве чилдренов текст, оформляя его в параграф <p> и делая текст более темным, чем основной
    // 4. Button создает оформление для кнопки, обрабатывает нажатие по ней
    // 5. Выделение отдельных компонентов внутри Card.tsx позволит в дальнейшем переиспользовать Title, TextContent и Button в других местах проекта. Кроме того, происходит разделение ответственности Сама карточка получает только те данные, которые ей нужны, аналогично и с ее дочерними компонентами

const Card:FC<{ card: Card}> = ({card}) => {
    return (
        <div className={styles.card}>
            <Title title={card.title} id={card.id}/>
            <TextContent>{card.content}</TextContent>
            <div className={styles.buttons}>
                <Dropdown list={['First Item', 'Закрыть']}/>
                <Button text={'Show card'} />
            </div>
        </div>
    );
};

export default Card;