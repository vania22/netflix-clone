import React from 'react';

import Header from '../components/header/Header';
import Profiles from '../components/profiles/Profiles';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

const ProfilesContainer = ({ user, setProfile }) => {
    return (
        <>
            <Header background={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src={logo} />
                </Header.Frame>
            </Header>
            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.Item
                        onClick={() => {
                            setProfile({
                                displayName: user.displayName,
                                photoURL: user.photoURL,
                            });
                        }}
                    >
                        <Profiles.Picture src={user.photoURL} />
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.Item>
                </Profiles.List>
            </Profiles>
        </>
    );
};

export default ProfilesContainer;
