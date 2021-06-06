import React from "react";

type Props = {
    name: string,
}

export const Button = (props: Props) => (
    <div>
        <a href="javascript:;">{props.name}</a>
    </div>
)