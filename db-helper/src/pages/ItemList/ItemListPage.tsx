import React, {useState} from "react"
import {Card, Tabs, Button, Modal} from "antd";
import {ItemTable} from "./ItemTable";
import {ItemsType} from "@hs/shared";
import {AddItem} from "./AddItem/AddItem";

const {TabPane} = Tabs

export const ItemListPage = () => {
    const [activeKey, setActiveKey] = useState(Object.keys(ItemsType)[0])
    const [showModal, setShowModal] = useState(false)

    const handleTabChange = (activeKey: string) => {
        setActiveKey(activeKey)
    }

    const handleModalShow = () => {
        setShowModal(true)
    }

    const handleModalHide = () => {
        setShowModal(false)
    }

    const getExtraContent = () => <Button
        type="primary"
        onClick={handleModalShow}
    >
        Add item
    </Button>

    return (
        <>
            <Card style={{margin: '50px 0'}}>
                <Tabs
                    defaultActiveKey={activeKey}
                    onChange={handleTabChange}
                    tabBarExtraContent={getExtraContent()}
                >
                    {Object.keys(ItemsType).map((item: string) => (
                        <TabPane tab={item} key={item}>
                            <ItemTable/>
                        </TabPane>
                    ))}
                </Tabs>
            </Card>
            <Modal
                title="Add item"
                width={900}
                visible={showModal}
                onCancel={handleModalHide}
                onOk={handleModalHide}
                maskClosable={false}
            >
                <AddItem currentTab={activeKey}/>
            </Modal>
        </>
    )
}