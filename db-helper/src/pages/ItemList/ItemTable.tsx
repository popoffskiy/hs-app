import React from "react"
import {Table} from "antd"

const columns: never[] = [];

export const ItemTable = (props: any) => {

    const {dataSource} = props

    return <Table dataSource={dataSource} columns={columns}/>
}

ItemTable.defaultProps = {
    dataSource: []
}