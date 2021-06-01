import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"
import {ItemListPage} from "./pages"
import {NavBar, NavBarType} from "@hs/shared";
import {Layout} from "antd";

const {Header, Content} = Layout;

function App() {

    const navItems: NavBarType[] = [
        {
            key: 'home',
            path: '/',
            title: 'Home'
        }
    ]

    return (
        <Layout>
            <Router>
                <Header>
                    <NavBar items={navItems}/>
                </Header>
                <Content style={{padding: '0 50px'}}>
                    <Switch>
                        <Route path="/">
                            <ItemListPage/>
                        </Route>
                    </Switch>
                </Content>
            </Router>
        </Layout>
    );
}

export default App;
