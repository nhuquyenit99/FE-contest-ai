import { Content, Footer} from 'antd/lib/layout/layout';
import Layout from 'antd/lib/layout/layout';
import CustomHeader from './CustomHeader';
import { Route, Switch } from 'react-router';
import { ContestPage } from 'modules/pages';
import LoginPage from '../../modules/pages/LoginPage/index';
function UserLayout(props) {
    const {headerRoutes, headerRouter} = props;
    return (
        <Layout className="layout">
            <CustomHeader routes={headerRoutes}></CustomHeader>
            <Layout>
                <Layout
                    style={{}}>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: 0,
                            minHeight: 280,
                            textAlign: 'left',
                        }}
                    >
                        {headerRouter}
                    </Content>
                </Layout>
            </Layout>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}

export default UserLayout;