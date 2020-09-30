import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Base = styled.form`
    max-width: 450px;
    min-height: 60px;
    background-color: rgba(0, 0, 0, 0.75);
    padding: 60px 68px 20px 68px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    @media (max-width: 600px) {
        width: 100%;
        padding: 10px;
    }
`;
export const Title = styled.h1`
    font-size: 32px;
`;

export const Input = styled.input.attrs((props) => ({
    placeholder: props.placeholder,
    type: props.type,
}))`
    width: 314px;
    height: 50px;
    border: none;
    margin: 16px 0;
    padding: 0;
    background: #333;
    border-radius: 4px;
    color: white;
    padding-top: 16px;
    padding-left: 20px;
    outline: none;
    box-sizing: border-box;

    @media (max-width: 600px) {
        height: 45px;
        width: 100%;
    }
`;
export const Submit = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    width: 100%;
    margin-top: 24px;
    margin-bottom: 70px;
    background-color: #e50914;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    color: white;
    padding: 16px;
    letter-spacing: 1.5px;
    outline: none;
    cursor: pointer;
    :hover {
        opacity: 0.97;
    }

    :active {
        opacity: 0.9;
    }

    @media (max-width: 600px) {
        margin: 20px 0;
        width: 100%;
        height: 40px;
        font-size: 18px;
    }
`;

export const Text = styled.p`
    width: fit-content;
    font-size: 16px;
    color: #737373;
`;
export const TextSmall = styled.p`
    font-size: 13px;
    color: #737373;
    max-width: 314px;
    text-align: left;
    display: flex;
    align-items: center;
    line-height: normal;

    svg {
        margin-right: 10px;
        margin-left: -10px;
    }
`;

export const Link = styled(RouterLink)`
    color: white;
    text-decoration: none;
    margin-left: 10px;

    &:hover {
        text-decoration: underline;
    }
`;

export const Error = styled.p`
    background-color: #e87c03;
    padding: 16px;
    width: 100%;
    margin-bottom: 0;
    box-sizing: border-box;
    border-radius: 4px;
    text-align: left;

    @media (min-width: 601px) {
        max-width: 314px;
    }
`;
