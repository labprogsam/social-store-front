import { useEffect, useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { CameraAlt, ErrorOutline, Edit, Upload, PersonOutline, AccountCircle } from "@mui/icons-material";
import { ProductList } from '../../components';
import {
  StyledContainer,
  Pathing,
  ProfileHeader,
  StyledBanner,
  BannerUploadButton,
  StyledAvatarContainer,
  AvatarUploadButton,
  StyledLogo,
  StyledContent,
  StyledOngName,
  StyledActions,
  EditButton,
  StyledForm,
  FormRow,
  FinalizeButton
} from "./styles";
import { useHandleError } from '../../utils/genericError';
import { getProfile, updateProfile } from '../../services/ong';
import { useUserData } from '../../services/auth';
import ong1 from "../../assets/CarouselMoc/ong1.svg";
import banner from "../../assets/ongViews/bannerExample.png";

const dadosIniciaisOng = {
  name: "Instituto Dia melhor",
  description: "Lorem ipsum dolor sitd asdok asdk aoskd asokd asodl asdlpasl dapsld aspdlk asokd oasd lasdp asldkoas odkas dpalsd pasld kasodk asodl aps dla",
  logo: ong1,
  banner: banner
};

const Ong = () => {
  const [editando, setEditando] = useState(true);
  const [ongData, setOngData] = useState(dadosIniciaisOng);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const { data } = useUserData();

  useEffect(() => {
    async function fetchData() {
      const response = await getProfile(data?.user.id);
      setOngData(response);
    }
    if (data?.user) {
      fetchData();
    }
  }, [data?.user.id]);

  // Atualiza debouncedQuery 2s após o usuário parar de digitar
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(ongData);
    }, 2000);

    return () => {
      clearTimeout(handler); 
    };
  }, [ongData]);

  useEffect(() => {
    if (debouncedQuery === "") return;

    async function updateOng() {
      await updateProfile(debouncedQuery);
      // setOngData(response);
    }
    updateOng();
  }, [debouncedQuery]);

  const handleInput = (e, field) => {
    const { value } = e.target;
    setOngData({
      ...ongData,
      [field]: value
    })
  };

  const handleUploadImagem = (e, campo) => {
    const arquivo = e.target.files[0];
    if (!arquivo) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setOngData({ ...ongData, [campo]: reader.result });
    };
    reader.readAsDataURL(arquivo);
  };

  return (
    <StyledContainer>
      <ProfileHeader>
        <StyledBanner bannerimage={ongData?.banner}>

          <BannerUploadButton component="label" variant="contained" startIcon={<Upload />}>
            Upload
            <input type="file" hidden accept="image/*" onChange={(e) => handleUploadImagem(e, "banner")} />
          </BannerUploadButton>
        </StyledBanner>

        <StyledAvatarContainer>
          {ongData?.logo || ongData?.gallery_images_url ?
            <StyledLogo src={ongData?.logo || ongData?.gallery_images_url} alt="Logo da ONG" /> :
            <AccountCircle id="avatar-default" />
          }
          <AvatarUploadButton component="label" variant="contained">
            <CameraAlt sx={{ color: "white" }} />
            <input type="file" hidden accept="image/*" onChange={(e) => handleUploadImagem(e, "logo")} />
          </AvatarUploadButton>
        </StyledAvatarContainer>
      </ProfileHeader>

      <StyledContent>
        <StyledForm>
          <FormRow>
            <TextField
              label="Nome da Ong"
              name="name"
              value={ongData?.name}
              onChange={(e) => handleInput(e, "name")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutline />
                  </InputAdornment>
                ),
              }}
              style={{ width: '60%' }}
            />

            {!ongData?.whatsapp && (
              <FinalizeButton
                variant="outlined"
                color="error"
                startIcon={<ErrorOutline />}
                onClick={() => {}}
              >
                Finalize seu cadastro!
              </FinalizeButton>
            )}
          </FormRow>

          <TextField
            fullWidth
            label="Descrição"
            name="description"
            value={ongData?.description}
            onChange={(e) => handleInput(e, "description")}
            multiline
            rows={6}
          />
        </StyledForm>
      </StyledContent>
      <ProductList isCreate products={ongData?.products} />
    </StyledContainer>
  );
};

export default Ong;