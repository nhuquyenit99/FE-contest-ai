import { Content, Footer} from 'antd/lib/layout/layout';
import Layout from 'antd/lib/layout/layout';
import CustomHeader from './CustomHeader';
import { HeaderRoutes } from 'modules/Contestant/BaseUserPage';
type Props = {
    headerRoutes: HeaderRoutes,
    headerRouter: JSX.Element
}
function UserLayout({headerRouter, headerRoutes}: Props) {
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