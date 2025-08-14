import styled from 'styled-components';

export const StyledMainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
`;

export const StyledLeftSide = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledForms = styled.form`
    width: 60%;
    max-width: 580px;

    h1 {
        font-size: 25px;
        font-weight: 500;
    }

    p {
        margin: 15px 0;
    }

    .portal {
        color: #00aaff;
        text-decoration: none;
    }

    #login-button {
        background-color: #009FE3;
        margin-top: 10px;
        margin-bottom: 30px;
        padding: 8px 0;
        width: 100%;
    }

    #forget-password {
        text-align: end;
        color: #009FE3;
        text-decoration: none;
        margin: 7px 0;
        font-size: 14px;

        a:visited {
            color: #009FE3;
        }
    }
`;

export const StyledRightSide = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledImage = styled.img`
    width: 92%;
    height: 92%;
    border-radius: 10px;
    object-fit: cover;
`;

export const StyledRegister = styled.p`
    text-align: center;
    width: 100%;

    a {
        color: #009FE3;
    }
`;