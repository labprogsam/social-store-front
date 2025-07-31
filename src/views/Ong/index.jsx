import { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { CameraAlt, ErrorOutline, Edit, Upload, PersonOutline } from "@mui/icons-material";

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

const dadosIniciaisOng = {
  nome: "Instituto Dia melhor",
  descricao: "Lorem ipsum dolor sit...",
  logo: "",
  banner: ""
};

const Ong = () => {
  const [temPermissao, setTemPermissao] = useState(true);
  const [cadastroFinalizado, setCadastroFinalizado] = useState(false);
  const [editando, setEditando] = useState(false);
  const [dadosOng, setDadosOng] = useState(dadosIniciaisOng);
  const [dadosEditados, setDadosEditados] = useState(dadosIniciaisOng);

  const handleEditar = () => {
    setDadosEditados(dadosOng);
    setEditando(true);
  };

  const handleSalvar = () => {
    setDadosOng(dadosEditados);
    setEditando(false);
    if (!cadastroFinalizado) {
      setCadastroFinalizado(true);
    }
  };

  const lidarMudancaInput = (e) => {
    const { name, value } = e.target;
    setDadosEditados(prev => ({ ...prev, [name]: value }));
  };

  const lidarUploadImagem = (e, campo) => {
    const arquivo = e.target.files[0];
    if (!arquivo) return;
    const leitor = new FileReader();
    leitor.onloadend = () => {
      setDadosEditados(prev => ({ ...prev, [campo]: leitor.result }));
    };
    leitor.readAsDataURL(arquivo);
  };

  if (!temPermissao) {
    return <StyledContainer><p>Você não tem permissão para visualizar esta página.</p></StyledContainer>;
  }

  return (
    <StyledContainer>
      {!editando && <Pathing>Home / Ongs / <b>{dadosOng.nome}</b></Pathing>}

      <ProfileHeader>
        <StyledBanner bannerImage={editando ? dadosEditados.banner : dadosOng.banner}>
          {editando && (
            <BannerUploadButton component="label" variant="contained" startIcon={<Upload />}>
              Upload
              <input type="file" hidden accept="image/*" onChange={(e) => lidarUploadImagem(e, "banner")} />
            </BannerUploadButton>
          )}
        </StyledBanner>

        <StyledAvatarContainer>
          <StyledLogo src={editando ? dadosEditados.logo : dadosOng.logo} alt="Logo da ONG" />
          {editando && (
            <AvatarUploadButton component="label" variant="contained">
              <CameraAlt sx={{ color: "white" }} />
              <input type="file" hidden accept="image/*" onChange={(e) => lidarUploadImagem(e, "logo")} />
            </AvatarUploadButton>
          )}
        </StyledAvatarContainer>
      </ProfileHeader>

      <StyledActions>
        {!editando && (
          <EditButton variant="contained" startIcon={<Edit />} onClick={handleEditar}>
            Editar Perfil
          </EditButton>
        )}
      </StyledActions>

      <StyledContent>
        {editando ? (
          <StyledForm>
            <FormRow>
              <TextField
                label="Nome da Ong"
                name="nome"
                value={dadosEditados.nome}
                onChange={lidarMudancaInput}
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
                  onClick={handleSalvar}
                >
                  Finalize seu cadastro!
                </FinalizeButton>
              )}
            </FormRow>

            <TextField
              fullWidth
              label="Descrição"
              name="descricao"
              value={dadosEditados.descricao}
              onChange={lidarMudancaInput}
              multiline
              rows={6}
            />
          </StyledForm>
        ) : (
          <>
            <StyledOngName>{dadosOng.nome}</StyledOngName>
            <p>{dadosOng.descricao}</p>
          </>
        )}
      </StyledContent>
    </StyledContainer>
  );
};

export default Ong;