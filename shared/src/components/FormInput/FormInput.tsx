import React from 'react'
import { Form, Input } from 'antd'
import { useField } from 'react-final-form'

type Props = {
    name: string,
    placeholder: string
}

export const FormInput = (props: Props) => {
    const {
        name,
        placeholder
    } = props

    const {
        input: {
            value,
            onChange
        }
    } = useField(name)

    return <Form.Item
        label={placeholder}
    >
        <Input
            value={value}
            onChange={onChange}
        />
    </Form.Item>
}
