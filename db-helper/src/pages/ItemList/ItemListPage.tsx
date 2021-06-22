import React, { useEffect, useState, } from 'react'
import {
    Card, Tabs, Button, Modal,
} from 'antd'
import { ButtonGroup, ItemsType, } from '@hs/shared'
import { connect, useSelector } from 'react-redux'
import { ItemTable, } from './ItemTable'
import AddItem from './AddItem/AddItem'
import { getItems, } from '../../store/items'
import { generateItems } from '../../store/generate-mock'

const { TabPane, } = Tabs

type Props = {
    getItems: () => void
    generateItems: () => void
}

export const ItemListPage: React.FC<Props> = (props: Props) => {
    const {
        getItems,
        generateItems
    } = props
    const [activeKey, setActiveKey,] = useState(Object.keys(ItemsType,)[0],)
    const [showModal, setShowModal,] = useState(false,)

    const items = useSelector((state: { items: { data: [] } }) => state.items.data)
    const generateLoading = useSelector((state: { generateItems: { loading: boolean } }) => state.generateItems.loading)

    useEffect(() => {
        getItems()
    }, [getItems,],)

    const handleTabChange = (activeKey: string,) => {
        setActiveKey(activeKey,)
    }

    const handleModalShow = () => {
        setShowModal(true,)
    }

    const handleModalHide = () => {
        setShowModal(false,)
    }

    const handleModalOk = () => {
        const element = document.getElementById('item-form')
        element?.dispatchEvent(new Event('submit', {
            cancelable: true,
            bubbles: true
        }))
    }

    const getExtraContent = () => (
        <ButtonGroup>
            <Button
                type="primary"
                onClick={handleModalShow}
            >
                Add item
            </Button>
            <Button
                type="primary"
                danger
                onClick={generateItems}
                loading={generateLoading}
            >
                GENERATE ITEMS
            </Button>
        </ButtonGroup>
    )

    return (
        <>
            <Card style={{ margin: '50px 0', }}>
                <Tabs
                    defaultActiveKey={activeKey}
                    onChange={handleTabChange}
                    tabBarExtraContent={getExtraContent()}
                >
                    {Object.keys(ItemsType,)
                        .map((item: string,) => (
                            <TabPane tab={item} key={item}>
                                <ItemTable dataSource={items}/>
                            </TabPane>
                        ),)}
                </Tabs>
            </Card>
            <Modal
                title="Add item"
                width={900}
                visible={showModal}
                onCancel={handleModalHide}
                onOk={handleModalOk}
                maskClosable={false}
            >
                <AddItem currentTab={activeKey}/>
            </Modal>
        </>
    )
}

const mapDispatchToProps = {
    getItems,
    generateItems
}

export default connect(null, mapDispatchToProps,)(ItemListPage,)
