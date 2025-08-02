import styled from 'styled-components';

export const StyledMainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    min-width: 320px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledLeftSide = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 20px 10px;
  }
`;

export const StyledForms = styled.form`
    width: 60%;
    max-width: 580px;
    min-width: 320px;

    h1 {
        font-size: 25px;
        font-weight: 500;

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

    p {
        margin: 15px 0;
        font-size: 14px;

    @media (max-width: 480px) {
      font-size: 13px;
    }
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

    @media (max-width: 480px) {
      font-size: 13px;
    }
  }

    @media (max-width: 768px) {
    width: 90%;
  }
`;

export const StyledRightSide = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
  @media (max-width: 768px) {
    display: none;
  }
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
        
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;