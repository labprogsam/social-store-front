import styled from 'styled-components';

export const StyledModalTitle = styled.h2`
  font-weight: 500;
  font-size: 16px;
  color: #00213F;
`;

export const StyledModalText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #667A8C;
  margin: 10px 0;
`;

export const StyledFeedbackContent = styled.div`
  padding: 32px;
  max-width: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  img {
    margin: 10px 0;
    width: 30px;
    height: 30px;
  }

  p {
    margin: 10px 0;
  }
`;