import styled from 'styled-components/macro';

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    align-content: space-between;
    height: fit-content;
    max-height: 70vh;
    text-align: center;
    color: white;
    padding-bottom: 100px;
    ${({ border }) => border && `border-bottom: 8px solid #222`};

    background: url(${({ src }) =>
        src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'})
        top left / cover no-repeat;

    @media (max-width: 600px) {
        min-height: 550px;
        height: 700px;
    }

    @media (max-width: 1100px) {
        ${({ dontShowOnSmallScreen }) =>
            dontShowOnSmallScreen &&
            `height: auto; min-height: auto; background: none; border-bottom: 0; padding-bottom: 30px; ${Container} {margin-bottom: 0;}`};
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 56px;
    a {
        text-decoration: none;
    }

    @media (min-width: 700px) {
        margin-bottom: 100px;
    }
`;

export const Group = styled.div`
    display: flex;
    align-items: center;
`;

export const Logo = styled.img`
    height: 45px;
    width: 167px;

    @media (max-width: 1440px) {
        height: 36px;
        width: 145px;
    }

    @media (max-width: 600px) {
        height: 24px;
        width: 101px;
    }
`;

export const Frame = styled.div``;

export const Button = styled.button`
    display: block;
    background-color: #e50914;
    text-decoration: none;
    width: 84px;
    height: fit-content;
    color: white;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    box-sizing: border-box;
    border: none;
    outline: none;

    @media (max-width: 600px) {
        height: 30px;
        width: 65px;
        font-size: 14px;
        padding: 8px 8px;
    }

    :hover {
        opacity: 0.95;
    }

    :active {
        opacity: 0.9;
    }
`;

export const Feature = styled(Container)`
    padding: 0 0 500px 150px;
    flex-direction: column;
    align-items: normal;
    width: 50%;

    @media (max-width: 1100px) {
        display: none;
    }
`;

export const Text = styled.p`
    color: white;
    font-size: 22px;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin: 0;
    text-align: left;
    @media (max-width: 1100px) {
    }
`;

export const FeatureHeading = styled.h2`
    color: white;
    font-size: 50px;
    line-height: normal;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin: 0;
    margin-bottom: 30px;
    text-align: left;
    @media (max-width: 1100px) {
    }
`;

export const Link = styled.p`
    color: white;
    text-decoration: none;
    margin-right: 30px;
    font-weight: ${({ active }) => (active === true ? 'bold' : 'normal')};
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }

    &:last-of-type {
        margin-right: 0;
    }

    @media (max-width: 1100px) {
    }
`;

export const Picture = styled.button`
    background: url(${({ src }) => src});
    background-size: contain;
    border: 0;
    width: 32px;
    height: 32px;
    cursor: pointer;
`;

export const Dropdown = styled.div`
    display: none;
    background-color: black;
    position: absolute;
    padding: 10px;
    width: 100px;
    top: 32px;
    right: 10px;

    ${Group}:last-of-type ${Link} {
        cursor: pointer;
    }

    ${Group} {
        margin-bottom: 10px;
        justify-content: space-evenly;

        &:last-of-type {
            margin-bottom: 0;
        }

        ${Link}, ${Picture} {
            cursor: default;
        }

        p {
            font-size: 12px;
            margin-bottom: 0;
            margin-top: 0;
        }
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    position: relative;

    button {
        cursor: pointer;
    }

    &:hover > ${Dropdown} {
        display: flex;
        flex-direction: column;
    }
`;

export const Search = styled.div`
    display: flex;
    align-items: center;

    svg {
        color: white;
        cursor: pointer;
    }

    @media (max-width: 700px) {
        display: none;
    }
`;

export const SearchIcon = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 0;
    margin-left: 0;
    outline: none;

    img {
        filter: brightness(0) invert(1);
        width: 16px;
    }
`;

export const SearchInput = styled.input`
    background-color: #44444459;
    color: white;
    border: 1px solid white;
    border-radius: 3px;
    transition: ease-in-out 0.5s;
    height: 30px;
    font-size: 14px;
    margin-left: ${({ active }) => (active ? '10px' : '0')};
    padding: ${({ active }) => (active ? '0 10px' : '0')};
    opacity: ${({ active }) => (active ? '1' : '0')};
    width: ${({ active }) => (active ? '200px' : '0px')};
`;

export const PlayButton = styled.button`
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
    background-color: #e6e6e6;
    color: #000;
    border-width: 0;
    padding: 10px 20px;
    border-radius: 5px;
    max-width: 130px;
    font-size: 20px;
    font-weight: bold;
    margin-top: 30px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    outline: none;

    &:hover {
        background-color: #ff1e1e;
        color: white;
    }
`;
