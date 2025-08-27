import styled, { css } from 'styled-components';
import { Button } from '@mui/material';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const Pathing = styled.p`
  color: rgba(0, 0, 0, 0.5);
  margin: 13px 0;
  font-size: 13px;
  width: 100%;
  max-width: 1400px;
  
  b {
    color: #1E1E1E;
  }
`;

export const ProfileHeader = styled.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
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
  font-size: 24px;

  ${props =>
    props.bannerimage
      ? css`
          background-image: url(${props.bannerimage});
        `
      : css`
          background-color: #f0f2f5;
        `}
`;

export const StyledAvatarContainer = styled.div`
  position: absolute;
  left: 2rem;
  bottom: 0;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid white;
  background-color: white;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  #avatar-default {
    width: 100%;
    height: 100%;
    opacity: 0.4;
  }
`;

export const StyledLogo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const StyledContent = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  margin-bottom: 20px;
`;

export const StyledOngName = styled.h1`
  font-size: 24px;
  color: #000000;
  margin: 0;
  margin-bottom: 15px;
`;

export const BotaoDireitaWrapper = styled.div`
  margin-left: 200px;
`;
