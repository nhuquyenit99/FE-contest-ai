import Layout, { Content } from 'antd/lib/layout/layout';
import { useState } from 'react';
import { Redirect } from 'react-router';
import { readCookie } from 'utils/cookie';
import AdminSider from './AdminSider';
import { ListMyRoutes } from 'modules/Admin/index';
type AdminLayoutProps = {
    siderRouter: JSX.Element,
    siderRoutes: ListMyRoutes
};

function AdminLayout({siderRoutes, siderRouter}: AdminLayoutProps) {
    // const [authFails, setAuthFails] = useState((readCookie('access_token')===''));
    const token = readCookie('access_token');
    // console.log(authFails);
    if (!token) {
        return <Redirect to='/login/admin' />;
    }
    return (
        <Layout style={{ flexDirection: 'row' }}>
            <AdminSider routes={siderRoutes}></AdminSider>
            <Layout style={{
                height: '100vh',
                margin: 0,
            }}>
                <Content style={{ height: '100%', textAlign: 'left', margin: '15px' }}>
                    {siderRouter}
                </Content>
            </Layout>
        </Layout>
    );
}

export default AdminLayout;