import styled from 'styled-components';

export const StyledMainContainer = styled.div`
    min-width: 300px;
    max-height: 100vh;
    background-color: #dfebf0;
    padding-left: 40px;
    padding-top: 40px;
    color: #1E1E1E;

`;

export const StyledLine = styled.div`
    width: 100%;
    background-color: #009FE3;
    height: 2px;
    margin: 20px 0;
`;

export const StyledCategory = styled.p`
    color: ${(props) => (props.isselected === "true" ? "#0B236D" : "")};
    margin: 15px 7px;
    cursor: pointer;
    padding-right: 40px;
`;