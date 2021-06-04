import React from 'react'
import { Select, Form } from 'antd'
import { useField } from 'react-final-form'

const { Option } = Select

type Props = {
    name: string,
    placeholder: string,
    defaultValue?: string,
    options: SelectType[],
    mode?: 'multiple' | 'tags' | undefined
}

type SelectType = {
    key: string,
    disabled?: boolean,
    title: string,
    mode?: string
}

export const FormSelect = (props: Props) => {

    const {
        name,
        placeholder,
        defaultValue,
        options,
        mode
    } = props

    const {
        input: {
            value,
            onChange
        }
    } = useField(name, { initialValue: defaultValue })

    return <Form.Item
        label={placeholder}
    >
        <Select
            style={{ width: '100%' }}
            onChange={onChange}
            value={!!value ? value : undefined}
            defaultValue={defaultValue}
            mode={mode}
        >
            {options.map(({
                    key,
                    disabled,
                    title
                }) => (
                    <Option
                        key={key}
                        value={key}
                        disabled={disabled}
                    >
                        {title}
                    </Option>
                )
            )}
        </Select>
    </Form.Item>
}
