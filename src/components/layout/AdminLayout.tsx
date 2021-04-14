import Layout, { Content } from 'antd/lib/layout/layout';
import HomePage from 'modules/pages/AdminPage/HomePage';
import AdminSider from './AdminSider';
import ContestsPage from 'modules/pages/AdminPage/ContestsPage/index';
import CustomHeader from './CustomHeader';
import LanguagePage from 'modules/pages/AdminPage/LanguagePage';

function AdminLayout() {
    return (
        <Layout style={{flexDirection: 'row' }}>
            <AdminSider></AdminSider>
            <Layout style={{
                height: '100vh',
                margin: 0,
            }}>
                <CustomHeader></CustomHeader>
                <Content style={{ height: '100%', textAlign: 'left', margin:'15px'}}>
                    {/* <HomePage></HomePage> */}
                    {/* <ContestsPage></ContestsPage> */}
                    {/* <LanguagePage></LanguagePage> */}
                </Content>
            </Layout>
        </Layout>
    );
}

export default AdminLayout;