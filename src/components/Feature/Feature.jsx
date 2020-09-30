import React from 'react';
import { Container, Title, Subtitle } from './styles/feature';

const Feature = ({ children, ...restProps }) => {
    return <Feature.Container>{children}</Feature.Container>;
};

Feature.Container = ({ children, ...restProps }) => (
    <Container {...restProps}>{children}</Container>
);

Feature.Title = ({ children, ...restProps }) => (
    <Title {...restProps}>{children}</Title>
);

Feature.Subtitle = ({ children, ...restProps }) => (
    <Subtitle {...restProps}>{children}</Subtitle>
);

export default Feature;
