import React from 'react';
import { Spinner, LockBody, ReleaseBody, Picture } from './styles/loading';

const Loading = ({ src, ...restProps }) => {
    return (
        <Spinner {...restProps}>
            <LockBody />
            <Picture src={`/images/users/${src}.png`} />
        </Spinner>
    );
};

Loading.ReleaseBody = () => <ReleaseBody />;

export default Loading;
