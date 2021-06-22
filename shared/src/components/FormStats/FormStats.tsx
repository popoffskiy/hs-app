import React from 'react'
import { Button, Col, Empty, Form, Row, Select } from 'antd'
import { useFieldArray } from 'react-final-form-arrays'
import { useField } from 'react-final-form'
import { StatsType } from '../../enum'
import { FormInput } from '../FormInput/FormInput'

type Props = {
    name: string,
    placeholder: string
}

const getStatsOptions = () => Object.keys(StatsType)
    .map((item) => (
        {
            label: item,
            value: item
        }
    ))

const StatTypeSelect = ({ name }: { name: string }) => {
    const {
        input: {
            value,
            onChange
        }
    } = useField(name)
    return (
        <Select
            value={value}
            onChange={onChange}
            showSearch
            options={getStatsOptions()}
            optionFilterProp="children"
            filterOption={(input, option) => option?.value?.toLowerCase()
                .indexOf(input.toLowerCase()) >= 0}
        />
    )
}

export const FormStats: React.FC<Props> = (props: Props) => {
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
            type: '',
            value: ''
        })
    }

    const getAddButton = () => <Button type="primary" onClick={handleAdd}>Add stat</Button>

    const getContent = () => (
        <>
            {fields.map((name, index) => getItem({
                name,
                index
            }))}
            {getAddButton()}
        </>
    )

    const getItem = ({
        name,
        index
    }: { name: string, index: number }) => <Row
        gutter={[16, 16]}
        style={{ paddingBottom: 20 }}
        key={index.toString()}
    >
        <Col span={11}>
            <StatTypeSelect name={`${name}.type`}/>
        </Col>
        <Col span={11}><FormInput placeholder="stat" name={`${name}.value`}/></Col>
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
