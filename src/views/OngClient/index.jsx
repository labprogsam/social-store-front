import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";
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
import { getProfile } from "../../services/ong";
import ong1 from "../../assets/CarouselMoc/ong1.svg";
import banner from "../../assets/ongViews/bannerExample.png"

const OngClient = () => {
  const { id } = useParams();
  const [ong, setOng] = useState({
    name: "",
    description: "",
    logo: ong1,
    banner: banner
  });

    useEffect(() => {
      async function fetchData() {
        const response = await getProfile(id);
        setOng(response);
      }
      if (id) {
        fetchData();
      }
    }, [id]);

  return (
    <StyledContainer>
      {<Pathing>Home / Ongs / <b>{ong?.name}</b></Pathing>}

      <ProfileHeader>
        <StyledBanner bannerimage={ong?.banner} />
        <StyledAvatarContainer>
          {ong?.logo ?
            <StyledLogo src={ong?.logo} alt="Logo da ONG" /> :
            <AccountCircle id="avatar-default" />
          }
        </StyledAvatarContainer>
      </ProfileHeader>
      <StyledContent>
        <>
          <StyledOngName>{ong?.name}</StyledOngName>
          <p>{ong?.description}</p>
        </>
      </StyledContent>
      <ProductList products={ong?.products} />
    </StyledContainer>
  );
};

export default OngClient;