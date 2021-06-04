import React from 'react'
import { Table } from 'antd'

const columns: never[] = []

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
