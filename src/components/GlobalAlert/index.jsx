import Button from "@mui/material/Button";
import {
  StyledModalTitle,
  StyledFeedbackContent,
  StyledModalText
} from './styles';
import Dialog from '@mui/material/Dialog';
import successIcon from "@mui/icons-material/Done";
import failIcon from "@mui/icons-material/ErrorOutline";

function GlobalAlert({ title, open, type, text, close }) {
  
  const handleClick = () => {
    close();
  }

  return (
    <Dialog open={open}>
      <StyledFeedbackContent>
        <img src={type === 'success' ? successIcon : failIcon} />
        <StyledModalTitle>{title}</StyledModalTitle>
          <StyledModalText>
            {text}
          </StyledModalText>
          <Button className="button-intregation" onClick={() => handleClick()}>
            Entendi
          </Button>
      </StyledFeedbackContent>
    </Dialog>
  )
}

export default GlobalAlert;