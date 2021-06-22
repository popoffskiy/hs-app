import React from 'react'
import { Form } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { connect } from 'react-redux'
import {
    FormInput,
    FormSelect,
    ItemsType,
    RarityType,
    TierType,
    DamageType,
    FormStats,
    WeaponType,
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

    const getWeaponTypeOptions = () => (Object.keys(WeaponType)
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
                    <FormSelect
                        name='weaponType'
                        placeholder='Weapon type'
                        options={getWeaponTypeOptions()}
                    />
                    <FormStats
                        name='stats'
                        placeholder='Item stats'
                    />
                    <FormStats
                        name='ability'
                        placeholder='Item abilities'
                    />
                    <FormStats
                        name='props'
                        placeholder='Item properties'
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
