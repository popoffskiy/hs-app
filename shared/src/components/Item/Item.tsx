import React from "react";
import "./style.scss";

type ItemType = {
    name: string,
    type: string,
    damage: number,
    speed: string,
    handleClick?: any,
}

const types: any = {
    satanic: "Сатанический"
}

export const Item = (props: ItemType) => (
    <div className="item" onClick={() => props.handleClick()}>
        <div className="item__image"></div>
        <div className="item__stats">
            <div className="item__stats-name">{props.name}</div>
            <div className="item__stats-type">{types[props.type]}</div>
            <div>Урон Базовой Атаки</div>
            <div className="item__stats-value">{props.damage}</div>
            <div>Скорость атаки</div>
            <div className="item__stats-value">{props.speed}</div>
        </div> 
    </div>
)
