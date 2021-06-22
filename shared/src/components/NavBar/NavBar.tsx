import React, { useState } from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import { NavBarType } from '../../types'

type Props = {
    items: NavBarType[],
    initialKey: string
}

export const NavBar = (props: Props) => {
    const {
        items,
        initialKey
    } = props
    const [state, setState] = useState({
        current: initialKey
    })

    return (
        <Menu
            theme="dark"
            selectedKeys={[state.current]}
            mode="horizontal"
        >
            {items.map(({
                key,
                title,
                path
            }) => (
                <Menu.Item
                    key={key}>
                    <Link to={path}>{title}</Link>
                </Menu.Item>
            ))}
        </Menu>
    )
}

NavBar.defaultProps = {
    initialKey: 'home'
}
