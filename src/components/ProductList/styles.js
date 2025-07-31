import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1400px;
`;

export const MainContentWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProductsFlexContainer = styled.div`
  display: grid;
  gap: 16px;
  padding: 16px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  flex-direction: row;
`;

export const ViewMoreButtonContainer = styled.div`
    margin-top: 32px;
    text-align: center;
    width: 100%;
`;
