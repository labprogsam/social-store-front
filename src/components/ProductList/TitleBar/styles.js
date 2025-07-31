import styled from 'styled-components';

export const BarContainer = styled.div`
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    margin-bottom: 24px;
    padding: 16px 24px;
    width: 100%;
    height: 65px;
    border-radius: 10px;
    border: 1px solid #009fe3;
    background-color: rgba(183, 210, 222, 0.45);
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

export const TitleText = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 1;
    letter-spacing: 0;
    color: #1e1e1e;

`;

export const StyledButton = styled.a`
    background-color: #fff;
    border: solid 1px #009FE3;
    color: #009FE3;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 5px 12px;
    border-radius: 6px;

    p {
        margin-right: 6px;
    }

    &:hover {
        opacity: 0.7;
    }
`;