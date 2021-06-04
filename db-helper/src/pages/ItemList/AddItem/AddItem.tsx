import React from 'react'
import { Form } from 'react-final-form'
import { Form as AntdForm } from 'antd'
import arrayMutators from 'final-form-arrays'
import { connect } from 'react-redux'
import {
    FormInput,
    FormSelect,
    ItemsType,
    RarityType,
    TierType,
    DamageType,
    FormStats
} from '@hs/shared'
import { postItems } from '../../../store/items/actions'

type Props = {
    currentTab: string,
    postItems: (data: []) => void,
}

export const AddItem: React.FC<Props> = (props: Props) => {
    const {
        currentTab,
        postItems
    } = props

    const onSubmit = (data: []) => {
        postItems(data)
    }

    const getItemTypeOptions = () => (Object.keys(ItemsType)
        .map((item) => ({
            key: item,
            title: item
        })))

    const getRarityTypeOptions = () => (Object.keys(RarityType)
        .map((item) => ({
            key: item,
            title: item
        })))

    const getTierTypeOptions = () => (Object.keys(TierType)
        .map((item) => ({
            key: item,
            title: item
        })))

    const getDamageTypeOptions = () => (Object.keys(DamageType)
        .map((item) => ({
            key: item,
            title: item
        })))

    return (
        <Form
            onSubmit={onSubmit}
            mutators={{
                ...arrayMutators
            }}
            render={({handleSubmit}) => (
                <form
                    id="item-form"
                    // layout="vertical"
                    onSubmit={handleSubmit}
                >
                    <FormInput name='name' placeholder='Name'/>
                    <FormSelect
                        name='itemType'
                        placeholder='Item type'
                        options={getItemTypeOptions()}
                        defaultValue={currentTab}
                    />
                    <FormSelect
                        name='rarityType'
                        placeholder='Rarity type'
                        options={getRarityTypeOptions()}
                    />
                    <FormSelect
                        name='tierType'
                        placeholder='Tier type'
                        options={getTierTypeOptions()}
                    />
                    <FormSelect
                        name='damageType'
                        placeholder='Damage type'
                        options={getDamageTypeOptions()}
                        mode="multiple"
                    />
                    <FormStats
                        name='stats'
                        placeholder='Item stats'
                    />
                </form>
            )}
        />
    )
}

const mapDispatchToProps = {
    postItems
}

export default connect(null, mapDispatchToProps)(AddItem)
