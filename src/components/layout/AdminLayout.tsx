import Layout, { Content } from 'antd/lib/layout/layout';
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { readCookie } from 'utils/cookie';
import AdminSider from './AdminSider';
function AdminLayout(props) {
    const [authFails, setAuthFails] = useState((readCookie('access_token')===''));
    const { siderRoutes, siderRouter } = props;
    console.log(authFails);
    if (authFails) {
        return <Redirect to='/login' />;
    }
    return (
        <Layout style={{ flexDirection: 'row' }}>
            <AdminSider routes={siderRoutes}></AdminSider>
            <Layout style={{
                height: '100vh',
                margin: 0,
            }}>
                {/* <CustomHeader ></CustomHeader> */}
                <Content style={{ height: '100%', textAlign: 'left', margin: '15px' }}>
                    {siderRouter}
                </Content>
            </Layout>
        </Layout>
    );
}

export default AdminLayout;