/** 1. Работа с простыми типами */
//
// Напишите тип функции, конкатенирующей две строки

import React from "react"

type Concat = (firstString: string, secondString: string) => string

export const concat: Concat = (firstString, secondString) => firstString + secondString

/** 2. Работа с интерфейсами */
//
// Напишите интерфейс для описания следующих данных

interface ITask {
    howIDoIt: string, someArray: (string | number)[]
}

interface IMyHomeTask {
    howIDoIt: string,
    someArray: (string | number)[],
    withData: ITask[]
}

const MyHomeTask: IMyHomeTask = {
    howIDoIt: "I Do It Wel",
    someArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", someArray: ["string one", 23] }],
}

/** 3. Типизация функций, используя Generic */
//
// interface MyArray<T> {
//     [N: number]: T;
//     добавьте типизацию для метода reduce
//     reduce();
// }
//

interface IMyArray<T> {
    [N: number]: T;
    reduce<U>(fn: (acc: U, value: T) => U, initial: U): U;
}

const myArray: IMyArray<number> = [1, 2, 3, 4];

const numbersToString = myArray.reduce((total, current) => total = `${total} ${current}`, "");

console.log(numbersToString); // => "1 2 3 4"

/** 4. Работа с MappedTypes */
//
interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}
//
// Стандартный generic Partial работает так же как Readonly, только для внешних ключей.
//
//     Напишите такой MyPartial, чтобы создание подобного объекта стало возможным
//
const homeTask: MyPartial<IHomeTask> = {
    externalData: {
        value: 'win'
    }
}

type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}

/** Сложные примеры */
/** 5*. Работа с Generic, Mapped Types, Type inference №1 */

// Это React Functional Component
//
function HomeComponent(props: { firstProp: string }) {
    return (
        <div>
            { props.firstProp }
        </div>
    )
}
//
// Напишите такой тип, который извлечет тип props из этого или любого другого React компонента.
// Подсказка: любой реакт компонент расширяет React.ComponentType<Props>


type TMyType<T> = T extends React.ComponentType<infer Props> ? Props : T


type t = TMyType<typeof HomeComponent>;
//


/** 6*. Работа с Generic, Mapped Types, Type inference №2 */

//
// Дан namespace JSX. Получить к нему доступ можно после установки пакета @types/react. Мы проделывали это в одном из первых уроков.
//     Среди JSX IntrinsicElements есть Элемент DIV, получить доступ к нему можно так:
//     type TDivElement = JSX.IntrinsicElements['div'];
// Этот тип описывает все свойства, доступные для HTMLDivElement.
// Напишите такой тип TGetJSXPropsProp, который извлекает все HTML свойства, доступные для любого jsx элемента.
//

type TGetJSXPropsProp<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T] extends React.DetailedHTMLProps<infer P, any> ? P : never

