import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ImFacebook2 } from 'react-icons/im';

import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';
import HeaderContainer from '../containers/HeaderContainer';
import SignInForm from '../components/form/SignInForm';
import FooterContainer from '../containers/FooterContainer';

const SignUp = () => {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [firstName, setfirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await firebase
                .auth()
                .createUserWithEmailAndPassword(emailAddress, password);

            await response.user.updateProfile({
                displayName: firstName,
                photoURL: Math.floor(Math.random() * 5) + 1,
            });

            history.push(ROUTES.BROWSE);
        } catch (error) {
            setfirstName('');
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        }
    };

    const isInvalid =
        !firstName.trim() || !password.trim() || !emailAddress.trim();

    return (
        <>
            <HeaderContainer button={false}>
                <SignInForm>
                    <SignInForm.Base onSubmit={(e) => onSubmit(e)}>
                        <SignInForm.Title>Sign Up</SignInForm.Title>
                        {error && <SignInForm.Error>{error}</SignInForm.Error>}
                        <SignInForm.Input
                            placeholder="First Name"
                            type="text"
                            value={firstName}
                            onChange={(e) => setfirstName(e.target.value)}
                        />
                        <SignInForm.Input
                            placeholder="Email Address"
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
                                Sign up with Facebook
                            </SignInForm.TextSmall>
                        </SignInForm.Link>
                        <SignInForm.Text>
                            Already have an account?
                            <SignInForm.Link to={ROUTES.SIGN_IN}>
                                Sign in now.
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

export default SignUp;
