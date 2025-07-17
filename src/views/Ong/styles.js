import styled from 'styled-components';

// Estilos Gerais
export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  position: relative;
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

export const StyledBanner = styled.div`
  position: relative;
  width: 100%;
  height: 260px;
  background-image: url(${props => props.bannerImage});
  background-size: cover;
  background-position: center;
  border-radius: 20px 20px 0 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 1rem;
`;


export const StyledAvatarContainer = styled.div`
  position: absolute;
  left: 2rem;
  bottom: -45px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid white;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLogo = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
`;


export const StyledContent = styled.div`
    width: 100%;
    max-width: 1200px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
`;

export const StyledOngName = styled.h1`
    font-size: 28px;
    font-weight: bold;
    color: #333;
`;


// Estilos para o modo de Edição
export const StyledEditContainer = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 20px auto;
    padding: 20px;
`;


export const StyledActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;       
  gap: 10px;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
`;



export const StyledForm = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    position: relative;
    
`;

export const StyledBannerEditor = styled.div`
    height: 250px;
    width: 100%;
    border-radius: 12px;
    overflow: hidden;

    label, .downloader {
        border-radius: 12px;
    }
`;

export const StyledAvatarEditor = styled.div`
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: 6px solid white;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    background-color: #fff;
    overflow: hidden;
    position: absolute;
    top: 170px;
    left: 40px;
    z-index: 2;

     label, .downloader {
        border-radius: 50%;
    }
`;

