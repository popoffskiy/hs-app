import React from 'react'
import { Button, Col, Empty, Form, Input, Row, Select } from 'antd'
import { useFieldArray } from 'react-final-form-arrays'
import { StatsType } from '../../enum'

type Props = {
    name: string,
    placeholder: string
}

export const FormStats = (props: Props) => {
    const {
        placeholder,
        name
    } = props
    const {
        fields,
        fields: {
            push,
            remove
        }
    } = useFieldArray(name)

    const handleAdd = () => {
        push({
            statType: '',
            statValue: ''
        })
    }

    const getStatsOptions = () => Object.keys(StatsType)
        .map((item) => (
            {
                label: item,
                value: item
            }
        ))

    const getAddButton = () => <Button type="primary" onClick={handleAdd}>Add stat</Button>

    const getContent = () => (
        <>
            {fields.map((field, index) => getItem({
                field,
                index
            }))}
            {getAddButton()}
        </>
    )

    const getItem = ({
        field,
        index
    }: { field: any, index: number }) => <Row
        gutter={[16, 16]}
        style={{ paddingBottom: 20 }}
        key={index.toString()}
    >
        <Col span={11}>
            <Select
                showSearch
                options={getStatsOptions()}
                optionFilterProp="children"
                filterOption={(input, option) => option?.value?.toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0}
            />
        </Col>
        <Col span={11}><Input/></Col>
        <Col span={1}><Button onClick={() => remove(index)}>X</Button></Col>
    </Row>

    const getNoData = () => <Empty description=''>
        {getAddButton()}
    </Empty>

    return (
        <Form.Item
            label={placeholder}
        >
            {!!fields.length ? getContent() : getNoData()}
        </Form.Item>
    )
}
