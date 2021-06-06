import React from "react";
import { Item } from '../Item/Item';
import "./style.scss";

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

type Props = {
    style: ElementStyles,
    skills: SkillsList[],
    ability: SkillsList[],
    stats: StatsList[],
    item: ItemType,
}

export const CharacterBox = (props: Props) => (
    <div className="character-box__wrapper" style={props.style}>
        <div className="character-box" > 
            <div className="character-box__top-line"></div>
            <Item {...props.item} />
            <div className="character-box__content">
                <ul className="character-box__skills-list">
                    {props.skills.map(({value, name}) => (
                        <li key={name} className="character-box__skill">
                            <span className="character-box__skill-value">+ {value}</span>
                            <span>{name}</span>
                        </li>
                    ))}
                </ul>
                <ul className="character-box__skills-list character-box__skills-list--ability">
                    {props.ability.map(({name}) => (
                        <li key={name} className="character-box__skill">
                            <span>{name}</span>
                        </li>
                    ))}
                </ul> 
                <div className="character-box__stats-list--wrapper">
                    <ul className="character-box__stats-list">
                        <li className="character-box__stat character-box__stat--empty">empty</li>
                        {props.stats.map(({value, name, color = '' }) => (
                            <li key={value} className="character-box__stat">
                                {name ? <span>{name}:</span> : '' }
                                <span className={`character-box__stat-value ${color}`}>{value}</span>
                            </li>
                        ))} 
                    </ul> 
                </div>
            </div> 
        </div>
    </div>
)