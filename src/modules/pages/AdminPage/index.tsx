import AdminLayout from 'components/layout/AdminLayout';
import { Route, Switch } from 'react-router-dom';
import LanguagePage from './LanguagePage';
import ContestsPage from './ContestsPage';
import UsersPage from './UsersPage';
import FilesPage from './FilesPage/index';
import {
    FileOutlined,
    CommentOutlined,
    CrownOutlined,
    UserOutlined,
} from '@ant-design/icons';
const routes = [
    // {
    //     icon: PieChartOutlined,
    //     label: 'Dashboard',
    //     path: '/admin/languages',
    //     component: NotFoundPage
    // },
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
];

export default function AdminPage() {
    const router = () => {
        return (
            <Switch>
                {
                    routes.map(route => <Route key={route.path} {...route}></Route>)
                }
            </Switch>
        );
    };
    return (<AdminLayout router={router()} routes={routes}></AdminLayout>);
}