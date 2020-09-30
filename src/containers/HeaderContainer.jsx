import React from 'react';

import Header from '../components/header/Header';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

const HeaderContainer = ({ children, button, border }) => {
    return (
        <>
            <Header border={border}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src={logo} />
                    {button ? (
                        <Header.Button to={ROUTES.SIGN_IN}>
                            Sign In
                        </Header.Button>
                    ) : null}
                </Header.Frame>
                {children}
            </Header>
        </>
    );
};

export default HeaderContainer;
