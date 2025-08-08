import styled from "styled-components";

export const CardContainer = styled.a`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  width: 244px;
  height: 326px;
  margin:0 12px;
  margin-bottom: 24px;
  border: 1px solid #D9D9D9;
  border-radius: 8px;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 236px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const ProductImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const DetailsContainer = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const ProductName = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: #1a202c;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductPrice = styled.p`
  font-size: 0.875rem;
  color: #009FE3;
  font-weight: 600;
`;
