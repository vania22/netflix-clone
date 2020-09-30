import React, { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import {
    Container,
    Inner,
    Text,
    Form,
    Input,
    Button,
} from './styles/emailForm';

const EmailForm = ({ children, ...restProps }) => {
    const [email, setEmail] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        setEmail('');
    };

    return (
        <Container {...restProps}>
            <Inner>
                <EmailForm.Text>
                    Ready to watch? Enter your email to create or restart your
                    membership.
                </EmailForm.Text>
                <EmailForm.Form onSubmit={(e) => onSubmit(e)}>
                    <EmailForm.Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email address"
                    />
                    <EmailForm.Button>
                        get started <AiOutlineRight color="white" />
                    </EmailForm.Button>
                </EmailForm.Form>
            </Inner>
        </Container>
    );
};

EmailForm.Container = ({ children, ...restProps }) => (
    <Container {...restProps}>{children}</Container>
);

EmailForm.Inner = ({ children, ...restProps }) => (
    <Inner {...restProps}>{children}</Inner>
);

EmailForm.Text = ({ children, ...restProps }) => (
    <Text {...restProps}>{children}</Text>
);

EmailForm.Form = ({ children, ...restProps }) => (
    <Form {...restProps}>{children}</Form>
);

EmailForm.Input = ({ children, ...restProps }) => <Input {...restProps} />;

EmailForm.Button = ({ children, ...restProps }) => (
    <Button {...restProps}>{children}</Button>
);

export default EmailForm;
