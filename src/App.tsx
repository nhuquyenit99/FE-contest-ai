import React, { useContext, useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { NotFoundPage, Loading } from './components';
import { Module, RootModule } from './core';
import { readCookie } from 'utils/cookie';
import { fetchGetInfo } from 'services/auth';
import { useEffect} from 'react';
import { UserContext } from './context/index';
import './App.scss';

const INSTALLED_MODULE: any = {
    'modules': require('./modules/'),
};

const rootModule: RootModule = new RootModule();
function RootApplication() {
    const [loading, setLoading] = useState(true);
    const { updateUser } = useContext(UserContext);

    useEffect(() => {
        init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const setupModule = () => {
        for (let key in INSTALLED_MODULE) {
            const module = new Module(key);
            INSTALLED_MODULE[key].setup(module);
            rootModule.register(module);
            console.log(rootModule);
        }
    };

    const init = async () => {
        setLoading(true);
        // Setup module
        setupModule();
        const token = readCookie('access_token');
        if (token) {
            fetchGetInfo().then(res => {
                const { _id, username, first_name, last_name } = res;
                const user = {
                    _id,
                    username,
                    displayName: first_name + ' ' + last_name,
                    isAuthenticated: true
                };
                updateUser(user);
            }).catch(e => {
                console.log('Error > ', e);
                setLoading(false);
            });

        } else {
            setLoading(false);
        }
        setLoading(false);
    };

    const renderRoute = () => {
        return Object.entries(rootModule.routes()).map(([key, route]) => {
            return <Route key={route.path} {...route} />;
        });
    };

    if (loading) {
        return <Loading />;
    }
    return (
        <BrowserRouter basename="/">
            <Switch>
                {renderRoute()}
                <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>

    );
}
export { RootApplication };