import { Content, Footer} from 'antd/lib/layout/layout';
import Layout from 'antd/lib/layout/layout';
import CustomHeader from './CustomHeader';

function BaseLayout() {
    return (
        <Layout className="layout">
            <CustomHeader></CustomHeader>
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
                    </Content>
                </Layout>
            </Layout>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}

export default BaseLayout;