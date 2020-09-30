import React, { Fragment } from 'react';
import Footer from '../components/footer/Footer';

const footerLinks = [
    { text: 'FAQ', href: '#' },
    { text: 'Investor Relations', href: '#' },
    { text: 'Ways to Watch', href: '#' },
    { text: 'Corporate Information', href: '#' },
    { text: 'Netflix Originals', href: '#' },
    { text: 'Help Centre', href: '#' },
    { text: 'Jobs', href: '#' },
    { text: 'Terms of Use', href: '#' },
    { text: 'Contact Us', href: '#' },
    { text: 'Account', href: '#' },
    { text: 'Redeem gift cards', href: '#' },
    { text: 'Privacy', href: '#' },
    { text: 'Speed Test', href: '#' },
    { text: 'Media Centre', href: '#' },
    { text: 'Buy gift cards', href: '#' },
    { text: 'Cookie Preferences', href: '#' },
    { text: 'Legal Notices', href: '#' },
];

const FooterContainer = ({ border }) => {
    return (
        <Footer border={border}>
            <Footer.Top>Questions? Call 0800 096 6379</Footer.Top>
            <Footer.List>
                {footerLinks.map((link, index) => (
                    <Fragment key={index}>
                        <Footer.Link href={link.href}>{link.text}</Footer.Link>
                    </Fragment>
                ))}
            </Footer.List>
            <Footer.Country>Netflix United Kingdom</Footer.Country>
        </Footer>
    );
};

export default FooterContainer;
