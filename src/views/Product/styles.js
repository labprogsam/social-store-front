import styled from 'styled-components';

export const ProductDetailContainer = styled.div`
  padding: 20px 40px;
  max-width: 1400px;
  margin: 0 auto;
`;

export const Breadcrumb = styled.p`
  color: rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
  font-size: 14px;
  a {
    color: inherit;
    text-decoration: none;
  }
  span {
    color: #1E1E1E;
    font-weight: 500;
  }
`;

export const MainContent = styled.div`
  display: flex;
  gap: 40px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const MainImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid ${({ isActive }) => (isActive ? '#009FE3' : 'transparent')};
  transition: border-color 0.2s;
`;

export const RightColumn = styled.div`
  flex: 1;
`;

export const ProductName = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #0B236D;
`;

export const ProductPrice = styled.h2`
  font-size: 24px;
  color: #009FE3;
  margin: 10px 0;
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  margin: 20px 0;
`;

export const OngLink = styled.p`
    font-size: 14px;
    color: #666;
    a {
        color: #1a5e8d;
        font-weight: 600;
        font-style: italic;
    }
`;

export const PurchaseSection = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  align-items: center;
`;

export const BuyButton = styled.button`
    flex-grow: 1;
    height: 50px;
    background: #13a6e4;
    border-radius: 6px;
    color: white;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    border: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    &:hover {
        background: #0f8fd8;
    }
`;

export const SpecSection = styled.div`
  margin-top: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
`;

export const SpecTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #009FE3;
  display: inline-block;
`;

export const SpecContent = styled.div`
  display: flex;
  gap: 50px;
  
  ul {
    list-style-type: none;
    padding: 0;
    li {
      margin-bottom: 8px;
    }
  }

  h4 {
    font-weight: bold;
    margin-bottom: 10px;
  }
`;
