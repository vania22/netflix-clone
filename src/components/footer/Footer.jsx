import React from 'react';

import {
    Container,
    Inner,
    FooterTop,
    FooterList,
    FooterLink,
    FooterCountry,
} from './styles/footer';

const Footer = ({ children, ...restProps }) => {
    return (
        <Footer.Container {...restProps}>
            <Footer.Inner>{children}</Footer.Inner>
        </Footer.Container>
    );
};

Footer.Container = ({ children, ...restProps }) => (
    <Container {...restProps}>{children}</Container>
);

Footer.Inner = ({ children, ...restProps }) => (
    <Inner {...restProps}>{children}</Inner>
);

Footer.Top = ({ children, ...restProps }) => (
    <FooterTop {...restProps}>{children}</FooterTop>
);

Footer.List = ({ children, ...restProps }) => (
    <FooterList {...restProps}>{children}</FooterList>
);

Footer.Link = ({ children, ...restProps }) => (
    <FooterLink {...restProps}>
        <a href={restProps.href}>{children}</a>
    </FooterLink>
);

Footer.Country = ({ children, ...restProps }) => (
    <FooterCountry {...restProps}>{children}</FooterCountry>
);
export default Footer;
