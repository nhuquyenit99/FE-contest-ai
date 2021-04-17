import Layout, { Content } from 'antd/lib/layout/layout';
import { ReactNode } from 'react';
import AdminSider from './AdminSider';
import CustomHeader from './CustomHeader';
interface Props {
    router: Object,
    routes: Array<{path: string, label: string, icon: ReactNode}>
}
function AdminLayout({router, routes}: Props) {
    return (
        <Layout style={{flexDirection: 'row' }}>
            <AdminSider routes={routes}></AdminSider>
            <Layout style={{
                height: '100vh',
                margin: 0,
            }}>
                <CustomHeader></CustomHeader>
                <Content style={{ height: '100%', textAlign: 'left', margin:'15px'}}>
                    {router}
                </Content>
            </Layout>
        </Layout>
    );
}

export default AdminLayout;