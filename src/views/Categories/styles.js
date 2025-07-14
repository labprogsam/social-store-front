import styled from 'styled-components';

export const StyledMainContainer = styled.div`
  width: 100%;
`;

export const Pathing = styled.p`
  color: rgba(0, 0, 0, 0.25);
  margin: 13px 0;
  font-size: 13px;
  width: 100%;
  padding-left: 20px;

  span {
    color: #1E1E1E;
  }
`;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledListProducts = styled.div`
  max-height: 100vh;
  padding: 20px 50px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  width: 100%;
  scrollbar-width: none; /* Esconde no Firefox */

  h2 {
    margin: 15px 0;
    margin-top: 0;
    font-size: 20px;
  }

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -1.5%;
    margin-bottom: 30px;
  }

  #name {
    width: 100%;
    display: flex;
    justify-content: space-between;

    #first-name {
      margin-right: 15px;
      width: 100%;
    }

    #last-name {
      margin-left: 15px;
      width: 100%;
    }
  }

  .MuiInputBase-root {
    font-family: "Poppins", "sans-serif" !important;
    font-size: 16px !important;
    border-radius: 8px !important;
  }

  #actions {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    width: 100%;

    p {
      font-size: 14px;
    }

    #entrar {
      background-color: #1e3a8a;
      color: #fff;
      border-radius: 8px;
      padding: 8px 0;
    }

    #cadastre {
      margin-top: 15px;
      background-color: transparent;
      border: 1px solid #b2b2b2;
      color: #4c4c4c;
    }

    a {
      cursor: pointer;
      text-decoration: underline;
      font-size: 14px;
      margin-top: 25px;
    }

    #register-button {
      width: 100%;
      margin-top: 0;
    }
  }
`;

const ErrorSpan = styled.span`
  margin: 0px;
  color: red;
  font-size: 11px;
`;

export { ErrorSpan };
