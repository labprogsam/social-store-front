import styled from 'styled-components';

export const StyledMain = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 40px;
`;

export const StyledContainer = styled.div`
    width: 100%;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 30px;

    .Mui-disabled {
        color: rgba(0, 0, 0, 1) !important;
        cursor: default;
    }

    .MuiPaper-root {
        align-items: flex-start;
        justify-content: flex-start;
        padding: 20px;
        border: 1px solid #c4c4c4;
        box-shadow: none;
    }

    ._imagens_1kdb9_12 {
        width: 450px;
    }

    #_imagem_principal_1kdb9_1 {
        width: 100%;
        height: 330px;
    }
    ._infos_produto_1kdb9_53 {
        margin-top: 30px;
    }

    ._purchaseControls_1kdb9_99 {
        padding-top: 120px;
    }
`;

export const TitleBar = styled.div`
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 24px;
  padding: 16px 24px;
  width: 100%;
  height: 64px;
  border-radius: 10px;
  border: 1px solid #009fe3;
  background-color: rgba(183, 210, 222, 0.45);
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const TitleText = styled.h2`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0;
  color: #1e1e1e;
`;

export const StyledTexts = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: row;

    .description {
        margin-right: 20px;
    }
`;
