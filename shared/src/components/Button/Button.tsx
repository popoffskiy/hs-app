import React from "react";
import './style.scss';

type Props = {
    name: string,
}

export const Button = (props: Props) => (
    <div className="hs-button">
        <div className="hs-button__content">
        {props.name}
        </div> 
    </div>
)