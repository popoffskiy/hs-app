import {Form} from 'react-final-form'
import {Form as AntdForm} from 'antd'
import arrayMutators from 'final-form-arrays'
import {FormInput, FormSelect, ItemsType, RarityType, TierType, DamageType, FormStats} from "@hs/shared";

type Props = {
    currentTab: string
}

export const AddItem = (props: Props) => {
    const {currentTab} = props

    const handleSubmit = () => {
    }

    const getItemTypeOptions = () => (Object.keys(ItemsType).map((item) => ({
        key: item,
        title: item
    })))

    const getRarityTypeOptions = () => (Object.keys(RarityType).map((item) => ({
        key: item,
        title: item
    })))

    const getTierTypeOptions = () => (Object.keys(TierType).map((item) => ({
        key: item,
        title: item
    })))

    const getDamageTypeOptions = () => (Object.keys(DamageType).map((item) => ({
        key: item,
        title: item
    })))

    return (
        <Form
            onSubmit={handleSubmit}
            mutators={{
                ...arrayMutators
            }}
            render={() => (
                <AntdForm
                    layout="vertical"
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
                </AntdForm>
            )}
        />
    )
}