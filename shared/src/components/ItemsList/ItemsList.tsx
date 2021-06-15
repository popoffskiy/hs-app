import React from "react";
import { Item } from "../Item/Item";
import "./style.scss";

type ItemType = {
    name: string,
    type: string,
    damage: number,
    speed: string,
}

type ItemsListType = {
    items: ItemType[],
    handleClick: any,
}

export const ItemsList = (props: ItemsListType) => (
    <div className="items-list">
        {props.items.map(item => (
            <Item key={item.name} {...item} handleClick={props.handleClick} />
        ))}
    </div>
)
