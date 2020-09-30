import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    margin: 40px auto;
`;

export const Item = styled.div`
    width: 100%;
    background-color: #303030;
    margin-bottom: 15px;
    overflow: hidden;
    box-sizing: border-box;

    @media (max-width: 600px) {
        padding: 10px 20px;
        margin-bottom: 10px;
    }
`;

export const Inner = styled.div`
    max-width: 810px;
    width: 100%;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 60px);
    height: 100%;
    padding: 20px 30px;
    cursor: pointer;
    user-select: none;

    h1 {
        font-size: 26px;
        margin: 0;
    }

    @media (max-width: 600px) {
        width: calc(100% - 20px);
        padding: 10px 10px;
        h1 {
            font-size: 16px;
        }
    }
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 50px;
    @media (max-width: 600px) {
        font-size: 20px;
    }
`;

export const Body = styled.p`
    font-size: 26px;
    position: relative;
    padding: 20px 30px;
    margin: 0 auto;
    white-space: pre-wrap;
    user-select: none;
    font-weight: normal;
    line-height: normal;
    ::before {
        content: '';
        position: absolute;
        width: 870px;
        left: -30px;
        top: -3px;
        height: 5px;
        background-color: black;

        @media (max-width: 600px) {
            top: -10px;
        }
    }

    @media (max-width: 600px) {
        font-size: 16px;
        margin-top: 30px;
        padding: 20px 20px;
    }
`;
