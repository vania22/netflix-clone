import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin: 60px auto;
    margin-top: 0;
`;

export const Inner = styled.div`
    max-width: 810px;
    width: 100%;
`;

export const Text = styled.p`
    font-size: 20px;
    text-align: center;
    margin-top: 0;

    @media (max-width: 600px) {
        padding: 0 30px;
        font-size: 18px;
        margin-top: 0;
    }
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

export const Input = styled.input.attrs((props) => ({
    type: 'email',
    name: 'email',
    id: 'email',
    value: props.value,
}))`
    width: 60%;
    height: 50px;
    padding: 10px 10px 0 10px;
    outline: none;
    font-size: 24px;
    line-height: normal;
    margin: 0;
    border: none;

    @media (max-width: 600px) {
        width: 85%;
        height: 40px;
        font-size: 18px;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: calc(40% - 40px);
    background-color: #e50914;
    border: none;
    font-size: 26px;
    color: white;
    padding: 0;
    letter-spacing: 1.5px;
    outline: none;
    cursor: pointer;
    svg {
        margin-left: 13px;
        font-size: 35px;
    }
    :hover {
        opacity: 0.97;
    }

    :active {
        opacity: 0.9;
    }

    @media (max-width: 600px) {
        margin-top: 20px;
        width: 200px;
        height: 40px;
        font-size: 18px;

        svg {
            margin-left: 5px;
            font-size: 30px;
        }
    }
`;
