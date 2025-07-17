import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { CameraAlt, ErrorOutline } from "@mui/icons-material";

import {
    StyledBanner,
    StyledContainer,
    StyledContent,
    StyledLogo,
    StyledOngName,
    Pathing,
    StyledForm,
    StyledActions,
    StyledAvatarContainer
} from "./styles";

const dadosIniciaisOng = {
    nome: "Instituto Dia melhor",
    descricao: "",
    logo: "ex: ../../assets/Ong/Logo.png",
    banner: "ex: ../../assets/Ong/hero.png"
};

const Ong = () => {
    const [temPermissao, setTemPermissao] = useState(true);
    const [cadastroFinalizado, setCadastroFinalizado] = useState(false);
    const [editando, setEditando] = useState(false);
    const [dadosOng, setDadosOng] = useState(dadosIniciaisOng);
    const [dadosEditados, setDadosEditados] = useState(dadosIniciaisOng);

    const alternarEdicao = () => {
        if (editando) {
            setDadosOng(dadosEditados);
        } else {
            setDadosEditados(dadosOng);
        }
        setEditando(!editando);
    };

    const cancelarEdicao = () => {
        setEditando(false);
        setDadosEditados(dadosOng);
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
            setDadosEditados(prev => ({
                ...prev,
                [campo]: leitor.result
            }));
        };
        leitor.readAsDataURL(arquivo);
    };

    if (!temPermissao || !editando) {
        return (
            <StyledContainer>
              
                <Pathing>Home / Ongs / <b>{dadosEditados.nome}</b></Pathing>

                <StyledBanner bannerImage={dadosEditados.banner}>
                    <Button
                        variant="contained"
                        sx={{ margin: "1rem", marginTop:"10%", color:"white" }}
                        component="label"
                    >
                        Upload
                        <input
                            type="file"
                            hidden
                            accept="image/*"
                            onChange={(e) => lidarUploadImagem(e, "banner")}
                        />
                    </Button>

                    <StyledAvatarContainer>
                        <StyledLogo src={dadosEditados.logo} alt="Logo da ONG" />
                        <Button
                            variant="contained"
                            sx={{
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                minWidth: "30px",
                                height: "30px",
                                borderRadius: "50%",
                                backgroundColor: "#00B0FF",
                                padding: 0,
                                zIndex: 2
                            }}
                            component="label"
                        >
                            <CameraAlt fontSize="small" sx={{ color: "white" }} />
                            <input
                                type="file"
                                hidden
                                accept="image/*"
                                onChange={(e) => lidarUploadImagem(e, "logo")}
                            />
                        </Button>
                    </StyledAvatarContainer>
                </StyledBanner>
                
                <StyledActions style={{ justifyContent: "flex-end" }}>
                    {!cadastroFinalizado && (
                        <Button
                            className="finalize-button"
                            variant="outlined"
                            color="error"
                            startIcon={<ErrorOutline />}
                        >
                            Finalize seu cadastro!
                        </Button>
                    )}
                </StyledActions>

                <StyledContent>
                    <StyledForm>
                        <TextField
                            label="Nome"
                            name="nome"
                            value={dadosEditados.nome}
                            onChange={lidarMudancaInput}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Descrição"
                            name="descricao"
                            value={dadosEditados.descricao}
                            onChange={lidarMudancaInput}
                            fullWidth
                            multiline
                            rows={6}
                            margin="normal"
                        />
                    </StyledForm>
                </StyledContent>
            </StyledContainer>
        );
    }
};

export default Ong;
