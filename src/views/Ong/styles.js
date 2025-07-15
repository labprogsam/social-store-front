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

export const StyledBanner = styled.header`
    width: 100%;
    max-width: 1200px;
    height: 300px;
    background-image: url(${props => props.bannerImage});
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    position: relative;
`;

export const StyledAvatarContainer = styled.div`
    position: absolute;
    bottom: -75px;
    left: 40px;
`;

export const StyledLogo = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 5px solid white;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    object-fit: cover;
`;

export const StyledContent = styled.div`
    width: 100%;
    max-width: 1200px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
`;

export const StyledOngName = styled.h1`
    font-size: 28px;
    font-weight: bold;
    color: #333;
`;

export const StyledDescription = styled.p`
    font-size: 16px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
`;

export const StyledProductsSection = styled.section`
    width: 100%;
    max-width: 1200px;
    margin-top: 40px;
    padding: 0 20px;
    margin-bottom: 50px;

    h2 {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 20px;
        border-bottom: 2px solid #eee;
        padding-bottom: 10px;
    }
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

    .finalize-button {
        margin-right: auto;
    }
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
    top: 170px; // Posição sobreposta
    left: 40px;
    z-index: 2;

     label, .downloader {
        border-radius: 50%;
    }
`;