import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ImFacebook2 } from 'react-icons/im';

import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';
import HeaderContainer from '../containers/HeaderContainer';
import SignInForm from '../components/form/SignInForm';
import FooterContainer from '../containers/FooterContainer';

const SignIn = () => {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            await firebase
                .auth()
                .signInWithEmailAndPassword(emailAddress, password);

            history.push(ROUTES.BROWSE);
        } catch (error) {
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        }
    };

    const isInvalid = password.trim() === '' || emailAddress.trim() === '';

    return (
        <>
            <HeaderContainer button={false}>
                <SignInForm>
                    <SignInForm.Base onSubmit={(e) => onSubmit(e)}>
                        <SignInForm.Title>Sign In</SignInForm.Title>
                        {error && <SignInForm.Error>{error}</SignInForm.Error>}
                        <SignInForm.Input
                            placeholder="Email address"
                            type="text"
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                        />
                        <SignInForm.Input
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <SignInForm.Submit disabled={isInvalid}>
                            Sign In
                        </SignInForm.Submit>
                        <SignInForm.Link
                            to={ROUTES.HOME}
                            style={{ textDecoration: 'none' }}
                        >
                            <SignInForm.TextSmall>
                                <ImFacebook2
                                    color="#4267B2"
                                    style={{
                                        backgroundColor: 'white',
                                        height: '1.5em',
                                        width: '1.5em',
                                        borderRadius: '3px',
                                    }}
                                />
                                Login with Facebook
                            </SignInForm.TextSmall>
                        </SignInForm.Link>
                        <SignInForm.Text>
                            New to Netflix?
                            <SignInForm.Link to={ROUTES.SIGN_UP}>
                                Sign up now.
                            </SignInForm.Link>
                        </SignInForm.Text>
                        <SignInForm.TextSmall>
                            This page is protected by Google reCAPTCHA to ensure
                            you're not a bot.
                        </SignInForm.TextSmall>
                    </SignInForm.Base>
                </SignInForm>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
};

export default SignIn;
