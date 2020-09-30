import React, { useState, useContext, createContext } from 'react';

import { ImCross, ImPlus } from 'react-icons/im';

import {
    Container,
    Inner,
    Title,
    Item,
    Header,
    Body,
} from './styles/accordion';

const ToggleContext = createContext();

const Accordion = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
};

Accordion.Title = ({ children, ...restProps }) => (
    <Title {...restProps}>{children}</Title>
);

Accordion.Item = function AccordionItem({ children, ...restProps }) {
    const [toggleShow, setToggleShow] = useState(false);

    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
    const { toggleShow, setToggleShow } = useContext(ToggleContext);

    return (
        <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
            <h1>{children}</h1>
            {toggleShow ? <ImCross color="white" /> : <ImPlus color="white" />}
        </Header>
    );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const { toggleShow } = useContext(ToggleContext);

    return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};

export default Accordion;
