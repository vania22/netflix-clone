import React from 'react';

import {
    Container,
    Base,
    Error,
    Title,
    Text,
    TextSmall,
    Link,
    Input,
    Submit,
} from './styles/signInForm';

const SignInForm = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>;
};

SignInForm.Error = ({ children, ...restProps }) => (
    <Error {...restProps}>{children}</Error>
);

SignInForm.Base = ({ children, ...restProps }) => (
    <Base {...restProps}>{children}</Base>
);

SignInForm.Title = ({ children, ...restProps }) => (
    <Title {...restProps}>{children}</Title>
);

SignInForm.Text = ({ children, ...restProps }) => (
    <Text {...restProps}>{children}</Text>
);

SignInForm.TextSmall = ({ children, ...restProps }) => (
    <TextSmall {...restProps}>{children}</TextSmall>
);

SignInForm.Link = ({ children, ...restProps }) => (
    <Link {...restProps}>{children}</Link>
);

SignInForm.Input = ({ children, ...restProps }) => <Input {...restProps} />;

SignInForm.Submit = ({ children, ...restProps }) => (
    <Submit {...restProps}>{children}</Submit>
);

export default SignInForm;
