import { StyledButton } from './Button.styles';

function Button({ children, onClick }) {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;