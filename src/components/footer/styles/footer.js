import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #757575;
    ${({ border }) => border && `border-top: 8px solid #222`};
`;

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-top: 50px;
    padding-left: 45px;
    padding-right: 45px;
    padding-bottom: 0;
    color: #757575;
    max-width: 1000px;

    @media (max-width: 600px) {
        padding-top: 50px;
        padding-left: 18px;
        padding-right: 18px;
        padding-bottom: 0;
    }
`;

export const FooterTop = styled.p`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 24px;
`;

export const FooterList = styled.ul`
    list-style: none;
    width: 100%;
    height: 160px;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;

    @media (max-width: 600px) {
        height: 380px;
    }
`;

export const FooterLink = styled.li`
    width: 25%;
    font-size: 13px;
    flex: 0 1 auto;
    margin-left: 0;
    margin-bottom: 16px;
    a {
        text-decoration: none;
        color: inherit;
    }
    @media (max-width: 600px) {
        width: 45%;
        font-size: 14px;
    }
`;

export const FooterCountry = styled.p`
    margin-top: 24px;
    margin-bottom: 45px;

    @media (max-width: 600px) {
        margin-top: 0;
    }
`;
