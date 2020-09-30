import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import IsUserRedirect from './helpers/routes';
import useAuthListener from './hooks/use-auth-listener';

import Home from './pages/Home';
import Browse from './pages/Browse';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App = () => {
    const user = useAuthListener();

    return (
        <Router>
            <Route exact path={ROUTES.HOME}>
                <IsUserRedirect user={user}>
                    <Home user={user} />
                </IsUserRedirect>
            </Route>
            <Route exact path={ROUTES.BROWSE}>
                <IsUserRedirect user={user}>
                    <Browse user={user} />
                </IsUserRedirect>
            </Route>
            <Route exact path={ROUTES.SIGN_IN}>
                <IsUserRedirect user={user}>
                    <SignIn />
                </IsUserRedirect>
            </Route>
            <Route exact path={ROUTES.SIGN_UP}>
                <IsUserRedirect user={user}>
                    <SignUp />
                </IsUserRedirect>
            </Route>
        </Router>
    );
};

export default App;
