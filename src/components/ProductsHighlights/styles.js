import styled from "styled-components";

export const SectionContainer = styled.section`
  padding: 30px;
  display: flex;
  justify-content: center;
`;

export const MainContentContainer = styled.div`
  width: 1400px;
  max-width: 100%;
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

export const ProductsFlexContainer = styled.div`
  display: grid;
  gap: 16px;
  padding: 16px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;
