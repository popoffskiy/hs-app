import React from 'react'
import { Table, Tag, Button } from 'antd'

const columns: Record<string, string | void | any>[] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Rarity type',
        dataIndex: 'rarityType',
        key: 'rarityType',
    },
    {
        title: 'Tier type',
        dataIndex: 'tierType',
        key: 'tierType',
    },
    {
        title: 'Damage type',
        dataIndex: 'damageType',
        key: 'damageType',
        render: (damageArr: string[]) => !!damageArr ? DamageRender(damageArr) : '--'
    },
    {
        title: 'Action',
        dataIndex: '_id',
        key: '_id',
        render() {
            return <><Button>Edit</Button><Button>Delete</Button></>
        }
    }
]

const DamageRender = (arr: string[]) => arr.map((damageType: string) => <Tag
    key={damageType.toString()}
>
    {damageType}
</Tag>)

type Props = {
    dataSource: []
}

export const ItemTable: React.FC<Props> = (props: Props) => {

    const { dataSource } = props

    return <Table dataSource={dataSource} columns={columns}/>
}

ItemTable.defaultProps = {
    dataSource: []
}
