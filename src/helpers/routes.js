import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const IsUserRedirect = ({ user, children, ...restProps }) => {
    const location = useLocation();
    return (
        <Route
            {...restProps}
            render={() => {
                if (!user && location.pathname === ROUTES.BROWSE) {
                    return (
                        <Redirect
                            to={{
                                pathname: ROUTES.HOME,
                            }}
                        />
                    );
                }
                if (user && location.pathname !== ROUTES.BROWSE) {
                    return (
                        <Redirect
                            to={{
                                pathname: ROUTES.BROWSE,
                            }}
                        />
                    );
                }
                return children;
            }}
        />
    );
};

export default IsUserRedirect;
