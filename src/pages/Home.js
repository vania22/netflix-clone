import React from 'react';

import { JumbotronContainer } from '../containers/JumbotronContainer';
import FooterContainer from '../containers/FooterContainer';
import AccordionContainer from '../containers/AccordionContainer';
import EmailForm from '../components/emailForm/EmailForm';
import HeaderContainer from '../containers/HeaderContainer';
import Feature from '../components/Feature/Feature.jsx';

const Home = () => {
    return (
        <>
            <HeaderContainer button border>
                <Feature>
                    <Feature.Title>
                        Unlimited films, TV programmes and more.
                    </Feature.Title>
                    <Feature.Subtitle>
                        Watch anywhere. Cancel at any time.
                    </Feature.Subtitle>
                </Feature>
                <EmailForm />
            </HeaderContainer>
            <JumbotronContainer />
            <AccordionContainer />
            <EmailForm />
            <FooterContainer border />
        </>
    );
};

export default Home;
