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
    font-weight: 600;
  }
`;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledListProducts = styled.div`
  max-height: 100vh;
  padding: 0 50px 20px 50px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  width: 100%;

  &::-webkit-scrollbar {
    width: 16px;
    padding-right: 8px; /* espaço para a barra */
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.3);
    border-radius: 4px;
    border: 5px solid #FFF;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    padding-right: 8px; /* espaço para a barra */
  }

  #main-title {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 600;
  }

  .MuiInputBase-root {
    font-family: "Poppins", "sans-serif" !important;
    font-size: 16px !important;
    border-radius: 8px !important;
  }
`;

const ErrorSpan = styled.span`
  margin: 0px;
  color: red;
  font-size: 11px;
`;

export { ErrorSpan };
