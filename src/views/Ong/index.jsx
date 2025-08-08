import { useState } from "react";
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
import ong1 from "../../assets/CarouselMoc/ong1.svg";
import banner from "../../assets/ongViews/bannerExample.png"

const dadosIniciaisOng = {
  name: "Instituto Dia melhor",
  description: "Lorem ipsum dolor sitd asdok asdk aoskd asokd asodl asdlpasl dapsld aspdlk asokd oasd lasdp asldkoas odkas dpalsd pasld kasodk asodl aps dla",
  logo: ong1,
  banner: banner
};

const Ong = () => {
  const [temPermissao, setTemPermissao] = useState(true);
  const [cadastroFinalizado, setCadastroFinalizado] = useState(false);
  const [editando, setEditando] = useState(true);
  const [dadosOng, setDadosOng] = useState(dadosIniciaisOng);

  const handleEdit = () => {
    setEditando(true);
  };

  const handleSave = () => {
    setDadosOng(dadosEditados);
    setEditando(false);
    if (!cadastroFinalizado) {
      setCadastroFinalizado(true);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setDadosEditados(prev => ({ ...prev, [name]: value }));
  };

  const handleUploadImagem = (e, campo) => {
    const arquivo = e.target.files[0];
    if (!arquivo) return;
    const leitor = new FileReader();
    leitor.onloadend = () => {
      setDadosOng(prev => ({ ...prev, [campo]: leitor.result }));
    };
    leitor.readAsDataURL(arquivo);
  };

  if (!temPermissao) {
    return <StyledContainer><p>Você não tem permissão para visualizar esta página.</p></StyledContainer>;
  }

  return (
    <StyledContainer>
      {!editando && <Pathing>Home / Ongs / <b>{dadosOng.name}</b></Pathing>}

      <ProfileHeader>
        <StyledBanner bannerimage={dadosOng.banner}>
          {editando && (
            <BannerUploadButton component="label" variant="contained" startIcon={<Upload />}>
              Upload
              <input type="file" hidden accept="image/*" onChange={(e) => handleUploadImagem(e, "banner")} />
            </BannerUploadButton>
          )}
        </StyledBanner>

        <StyledAvatarContainer>
          {dadosOng.logo ?
            <StyledLogo src={dadosOng.logo} alt="Logo da ONG" /> :
            <AccountCircle id="avatar-default" />
          }
          {editando && (
            <AvatarUploadButton component="label" variant="contained">
              <CameraAlt sx={{ color: "white" }} />
              <input type="file" hidden accept="image/*" onChange={(e) => handleUploadImagem(e, "logo")} />
            </AvatarUploadButton>
          )}
        </StyledAvatarContainer>
      </ProfileHeader>

      <StyledContent>
        {editando ? (
          <StyledForm>
            <FormRow>
              <TextField
                label="Nome da Ong"
                name="name"
                value={dadosOng.name}
                onChange={handleInput}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutline />
                    </InputAdornment>
                  ),
                }}
                style={{ width: '60%' }}
              />

              {!cadastroFinalizado && (
                <FinalizeButton
                  variant="outlined"
                  color="error"
                  startIcon={<ErrorOutline />}
                  onClick={handleSave}
                >
                  Finalize seu cadastro!
                </FinalizeButton>
              )}
            </FormRow>

            <TextField
              fullWidth
              label="Descrição"
              name="description"
              value={dadosOng.description}
              onChange={handleInput}
              multiline
              rows={6}
            />
          </StyledForm>
        ) : (
          <>
            <StyledOngName>{dadosOng.name}</StyledOngName>
            <p>{dadosOng.description}</p>
          </>
        )}
      </StyledContent>
      <ProductList isCreate />
    </StyledContainer>
  );
};

export default Ong;