import AdminLayout from 'components/layout/AdminLayout';
import { Route, Switch } from 'react-router-dom';
import LanguagePage from './LanguagePage';
import ContestsPage from './ContestsPage';
import UsersPage from './UsersPage';
import FilesPage from './FilesPage';
import {
    PieChartOutlined,
    FileOutlined,
    CommentOutlined,
    CrownOutlined,
    UserOutlined,
} from '@ant-design/icons';
import SampleCodePage from './SampleCodePage';
import { ReportPage } from './ReportPage';
export type MyRoute = {
    icon: any,
    label: string,
    path: string,
    component: () => JSX.Element
}
export type ListMyRoutes = MyRoute[];
const routes: ListMyRoutes = [
    {
        icon: PieChartOutlined,
        label: 'Dashboard',
        path: '/admin/dashboard',
        component: ReportPage
    },
    {
        icon: CrownOutlined,
        label: 'Contests',
        path: '/admin/contests',
        component: ContestsPage
    },
    {
        icon: UserOutlined,
        label: 'Users',
        path: '/admin/users',
        component: UsersPage
    },
    {
        icon: CommentOutlined,
        label: 'Languages',
        path: '/admin/languages',
        component: LanguagePage
    },
    {
        icon: FileOutlined,
        label: 'Files',
        path: '/admin/files',
        component: FilesPage
    },
    {
        icon: FileOutlined,
        label: 'Sample Code Help',
        path: '/admin/samplecode',
        component: SampleCodePage
    },

];

export default function AdminPage() {
    const router = (
        <Switch>
            {
                routes.map(route => <Route key={route.path} {...route}></Route>)
            }
        </Switch>
    );
    return (<AdminLayout siderRouter={router} siderRoutes={routes}></AdminLayout>);
}