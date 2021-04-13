import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { NotFoundPage, Loading } from './components';
import { Module, RootModule } from './core';
import './App.scss';
import { DataAccess } from './access';
// import { UserContext } from './context';

const INSTALLED_MODULE: any = {
    'modules': require('./modules'),
};

class RootApplication extends React.Component<{}, { loading: boolean }> {
    rootModule: RootModule;
    constructor(props: {}) {
        super(props);
        this.state = {
            loading: true,
        };
        this.rootModule = new RootModule();
    }
    componentDidMount() {
        this.init();
    }

    setupModule() {
        for (let key in INSTALLED_MODULE) {
            const module = new Module(key);
            INSTALLED_MODULE[key].setup(module);
            this.rootModule.register(module);
        }
    }

    async init() {
        this.setState({ loading: true });
        // Setup module
        this.setupModule();
        // const token = localStorage.getItem('token');
        // if (token) {
        //     DataAccess.Get('auth').then(res => {
        //         const user = {
        //             _id: res.data._id,
        //             avatar: res.data.avatar,
        //             displayName: res.data.display_name
        //         };
        //         this.context.updateUser(user, () => this.setState({loading: false}));
        //     }).catch(e => {
        //         console.log('Error > ', e);
        //         this.setState({loading: false});
        //     });

        // } else {
        //     this.setState({ loading: false }); 
        // }
        this.setState({ loading: false });
    }

    componentWillUnmount() {
    }

    renderRoute() {
        return Object.entries(this.rootModule.routes()).map(([key, route]) => {
            return <Route key={route.path} {...route} />;
        });
    }

    render() {
        if (this.state.loading) {
            return <Loading />;
        }
        return (
            <BrowserRouter basename="/">
                <Switch>
                    {this.renderRoute()}
                    <Route component={NotFoundPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}

// RootApplication.contextType = UserContext;

export { RootApplication };
