import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import {
    Background,
    Container,
    Group,
    Logo,
    Button,
    Feature,
    Text,
    Link,
    FeatureHeading,
    Picture,
    Profile,
    Dropdown,
    Search,
    SearchIcon,
    SearchInput,
    PlayButton,
} from './styles/header';

const Header = ({ background = true, border, children, ...restProps }) => {
    return background ? (
        <Background border={border} {...restProps}>
            {children}
        </Background>
    ) : (
        children
    );
};

Header.Frame = ({ children, ...restProps }) => (
    <Container {...restProps}>{children}</Container>
);

Header.Group = ({ children, ...restProps }) => (
    <Group {...restProps}>{children}</Group>
);

Header.Logo = ({ to, ...restProps }) => (
    <ReactRouterLink to={to}>
        <Logo {...restProps} />
    </ReactRouterLink>
);

Header.Button = ({ children, to, ...restProps }) => (
    <ReactRouterLink to={to}>
        <Button {...restProps}>{children}</Button>
    </ReactRouterLink>
);

Header.Feature = ({ children, ...restProps }) => (
    <Feature {...restProps}>{children}</Feature>
);

Header.Text = ({ children, ...restProps }) => (
    <Text {...restProps}>{children}</Text>
);

Header.FeatureHeading = ({ children, ...restProps }) => (
    <FeatureHeading {...restProps}>{children}</FeatureHeading>
);

Header.TextLink = ({ children, active, ...restProps }) => {
    return (
        <Link {...restProps} active={active}>
            {children}
        </Link>
    );
};

Header.Picture = ({ src, ...restProps }) => (
    <Picture src={`/images/users/${src}.png`} {...restProps} />
);

Header.Profile = ({ children, ...restProps }) => (
    <Profile {...restProps}>{children}</Profile>
);

Header.Dropdown = ({ children, ...restProps }) => (
    <Dropdown {...restProps}>{children}</Dropdown>
);

Header.Search = function HeaderSearch({
    searchTerm,
    setSearchTerm,
    ...restProps
}) {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive(!searchActive)}>
                <img src="/images/icons/search.png" />
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                placeholder="Search films and series"
                active={searchActive}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </Search>
    );
};

Header.PlayButton = ({ children, ...restProps }) => (
    <PlayButton {...restProps}>{children}</PlayButton>
);

export default Header;
