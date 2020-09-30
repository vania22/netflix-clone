import styled from 'styled-components/macro';

export const Container = styled.div`
    margin: 75px 0 30px 0;
`;
export const Title = styled.h1`
    font-size: 50px;
    margin: 0 100px;

    @media (max-width: 600px) {
        font-size: 26px;
        margin: 0 20px 30px 20px;
    }
`;
export const Subtitle = styled.h2`
    font-size: 26px;

    @media (max-width: 600px) {
        font-size: 18px;
        margin: 0 20px;
    }
`;
