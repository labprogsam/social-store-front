import styled, { css } from 'styled-components';
import { Button } from '@mui/material';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  margin-bottom: 3rem;
`;

export const Pathing = styled.p`
  color: rgba(0, 0, 0, 0.25);
  margin: 13px 0;
  font-size: 13px;
  width: 100%;
  max-width: 1200px;
  
  b {
    color: #1E1E1E;
  }
`;

export const ProfileHeader = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  padding-bottom: 50px; 
`;

export const StyledBanner = styled.div`
  width: 100%;
  height: 260px;
  border-radius: 20px;
  display: flex;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;

  ${props =>
    props.bannerImage
      ? css`
          background-image: url(${props.bannerImage});
        `
      : css`
          background-color: #f0f2f5;
        `}
`;

export const BannerUploadButton = styled(Button)`
  && {
    margin: 1rem;
    color: white;
    align-self: flex-end;
    margin-left: auto;
  }
`;

export const StyledAvatarContainer = styled.div`
  position: absolute;
  left: 2rem;
  bottom: 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid white;
  background-color: white;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLogo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const AvatarUploadButton = styled(Button)`
  && {
    position: absolute;
    bottom: 0px;
    right: 0px;
    min-width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 0;
    z-index: 2;
  }
`;

export const StyledActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;      
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 20px;
  min-height: 40px;
`;

export const EditButton = styled(Button)`
  && {
    margin-left: auto;
    color: white;
  }
`;

export const StyledContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`;

export const StyledOngName = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

export const StyledForm = styled.form`
  width: 100%;
  box-sizing: border-box;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin-bottom: 2rem;
`;


export const FinalizeButton = styled(Button)`
  && {
     margin-left: auto;  // <-- Isso empurra o botão para a direita
    white-space: nowrap;
    padding: 0.5rem 1.7rem;
  }
`;

export const BotaoDireitaWrapper = styled.div`
  margin-left: 200px;
`;
