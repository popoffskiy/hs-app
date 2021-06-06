import React, { useState } from "react"
import { CharacterBox, ItemsList } from "@hs/shared";
import "./HomePage.scss";

type ElementStyles = {
    width: string,
    height: string,
}

type SkillsList = {
    value?: string,
    name: string,
}

type StatsList = {
    name?: string,
    value: string,
    color?: string,
}

type ItemType = {
    name: string,
    type: string,
    damage: number,
    speed: string,
}



export const HomePage = () => {

    const [itemDetails, setItemDetails] = useState<any>({});

    const handleClick = () => {
        setItemDetails({
            style: itemBlockStyle,
            skills: skillsList,
            ability: abilityList,
            stats: statsList,
            item: item,
        });
    }

    return (
        <>
            Home page
            <div className="list-of-items">
                <ItemsList items={itemsList} handleClick={() => handleClick()} />
                {itemDetails.style ? <CharacterBox {...itemDetails}/> : ''}
            </div>
        </>
    )
};


const itemBlockStyle:ElementStyles = {
    width: "400px",
    height: "650px"
};

const skillsList: SkillsList[] = [
    {
        name: "Энергия",
        value: "2914"
    },
    {
        name: "Выносливость",
        value: "1410"
    },
    {
        name: "Урон Ядом",
        value: "79%"
    },
    {
        name: "Урон Ядом",
        value: "2350"
    },
    {
        name: "Скорость Атаки",
        value: "28%"
    },
];

const statsList: StatsList[] = [
    {
        name: "ID",
        value: "1768043",
    },
    {
        value: "[Ближний бой]",
        color: "blue",
    },
    {
        value: "[1-ручный]",
        color: "yellow",
    },
    {
        name: "Уровень",
        value: "10",
        color: "yellow",
    },
    {
        name: "Качество",
        value: "88%"
    },
    {
        name: "Требуемый Lvl",
        value: "100"
    },
    {
        name: "Lvl Предметов",
        value: "160"
    },
];

const abilityList: SkillsList[] = [
    {
        name: "Сглаз",
    },
];

const item: ItemType = {
    name: "Лазурный Гнев",
    type: "satanic",
    damage: 16899,
    speed: "1.77 Aps.",
}

const itemsList: ItemType[] = [
    {
        name: "Лазурный Гнев",
        type: "satanic",
        damage: 16899,
        speed: "1.77 Aps.",
    },
    {
        name: "Флакон Душ",
        type: "satanic",
        damage: 7990,
        speed: "1.85 Aps.",
    },
    {
        name: "Кровопускатель",
        type: "satanic",
        damage: 14147,
        speed: "1.21 Aps.",
    },
    {
        name: "Ярость Грома",
        type: "satanic",
        damage: 15199,
        speed: "1.80 Aps.",
    },
    {
        name: "Вестник Пламени",
        type: "satanic",
        damage: 16884,
        speed: "1.49 Aps.",
    },
]