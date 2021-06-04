import React, { useEffect, useState, } from 'react'
import {
    Card, Tabs, Button, Modal,
} from 'antd'
import { ItemsType, } from '@hs/shared'
import { connect, } from 'react-redux'
import { ItemTable, } from './ItemTable'
import AddItem from './AddItem/AddItem'
import { getItems, } from '../../store/items'

const { TabPane, } = Tabs

type Props = {
    getItems: () => void
}

export const ItemListPage: React.FC<Props> = (props: Props) => {
    const { getItems, } = props
    const [activeKey, setActiveKey,] = useState(Object.keys(ItemsType,)[0],)
    const [showModal, setShowModal,] = useState(false,)

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
        <Button
            type="primary"
            onClick={handleModalShow}
        >
            Add item
        </Button>
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
                                <ItemTable dataSource={[]}/>
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
}

export default connect(null, mapDispatchToProps,)(ItemListPage,)
