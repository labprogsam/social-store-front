import styled from 'styled-components';

export const StyledButton = styled.button`
  background: none;
  border: none;
  padding: 8px 16px;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #2563eb;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #1d4ed8; 
  }
`;