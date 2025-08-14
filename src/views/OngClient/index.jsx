import { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { CameraAlt, ErrorOutline, Edit, Upload, PersonOutline, AccountCircle } from "@mui/icons-material";
import { ProductList } from '../../components';
import {
  StyledContainer,
  Pathing,
  ProfileHeader,
  StyledBanner,
  StyledAvatarContainer,
  StyledLogo,
  StyledContent,
  StyledOngName,
} from "./styles";
import ong1 from "../../assets/CarouselMoc/ong1.svg";
import banner from "../../assets/ongViews/bannerExample.png"

const OngClient = () => {
  const [ong, setOng] = useState({
    name: "Instituto Dia melhor",
    description: "Lorem ipsum dolor sitd asdok asdk aoskd asokd asodl asdlpasl dapsld aspdlk asokd oasd lasdp asldkoas odkas dpalsd pasld kasodk asodl aps dla",
    logo: ong1,
    banner: banner
  });

  return (
    <StyledContainer>
      {<Pathing>Home / Ongs / <b>{ong.name}</b></Pathing>}

      <ProfileHeader>
        <StyledBanner bannerimage={ong.banner} />
        <StyledAvatarContainer>
          {ong.logo ?
            <StyledLogo src={ong.logo} alt="Logo da ONG" /> :
            <AccountCircle id="avatar-default" />
          }
        </StyledAvatarContainer>
      </ProfileHeader>
      <StyledContent>
        <>
          <StyledOngName>{ong.name}</StyledOngName>
          <p>{ong.description}</p>
        </>
      </StyledContent>
      <ProductList />
    </StyledContainer>
  );
};

export default OngClient;