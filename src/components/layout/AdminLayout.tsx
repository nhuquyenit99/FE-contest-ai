import Layout, { Content } from 'antd/lib/layout/layout';
import { ReactNode } from 'react';
import AdminSider from './AdminSider';
import CustomHeader from './CustomHeader';
function AdminLayout(props) {
    const {siderRoutes, siderRouter} = props;
    return (
        <Layout style={{flexDirection: 'row' }}>
            <AdminSider routes={siderRoutes}></AdminSider>
            <Layout style={{
                height: '100vh',
                margin: 0,
            }}>
                {/* <CustomHeader ></CustomHeader> */}
                <Content style={{ height: '100%', textAlign: 'left', margin:'15px'}}>
                    {siderRouter}
                </Content>
            </Layout>
        </Layout>
    );
}

export default AdminLayout;