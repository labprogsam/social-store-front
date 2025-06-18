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
`;