import { useState } from "react";
import { TextField, Button } from "@mui/material";
import {
    StyledBanner,
    StyledContainer,
    StyledContent,
    StyledDescription,
    StyledLogo,
    StyledOngName,
    Pathing,
    StyledEditContainer,
    StyledBannerEditor,
    StyledAvatarEditor,
    StyledForm,
    StyledActions,
    StyledAvatarContainer
} from "./styles";
// Removido o import do ProductCategory que não é mais usado
import { ImageDropZone } from '../../components'; 

const initialOngData = {
    name: "Instituto Dia melhor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    logo: "../../assets/Ong/Boneca.png",
    banner: "../../assets/Ong/hero.png"
};

const Ong = () => {
    const [hasPermission, setHasPermission] = useState(true);
    const [cadastroFinalizado, setCadastroFinalizado] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [ongData, setOngData] = useState(initialOngData);
    const [editedData, setEditedData] = useState(initialOngData);

    const handleEditToggle = () => {
        if (isEditing) {
            setOngData(editedData);
        } else {
            setEditedData(ongData);
        }
        setIsEditing(!isEditing);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditedData(ongData);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedData(prev => ({ ...prev, [name]: value }));
    }


    if (!hasPermission || !isEditing) {
        return (
             <StyledContainer>
                {hasPermission && (
                    <StyledActions>
                        <Button variant="contained" onClick={handleEditToggle}>Editar Página</Button>
                    </StyledActions>
                )}
                <Pathing>Home / Ongs / <b>{ongData.name}</b></Pathing>
                <StyledBanner bannerImage={ongData.banner}>
                    <StyledAvatarContainer>
                        <StyledLogo src={ongData.logo} alt="Logo da ONG" />
                    </StyledAvatarContainer>
                </StyledBanner>
                <StyledContent>
                    <StyledOngName>{ongData.name}</StyledOngName>
                    <StyledDescription>{ongData.description}</StyledDescription>
                </StyledContent>
            </StyledContainer>
        )
    }

    return (
        <StyledEditContainer>
            <StyledActions>
                {!cadastroFinalizado && (
                    <Button 
                        className="finalize-button"
                        variant="outlined" 
                        color="error"
                    >
                        Finalize seu cadastro!
                    </Button>
                )}
                <Button variant="text" onClick={handleCancel}>Sair</Button>
                <Button variant="contained" onClick={handleEditToggle}>Salvar</Button>
            </StyledActions>

            <StyledForm>
                {/* Imagens agora são inseridas via URL */}
                <TextField
                    label="URL da Imagem do Banner"
                    name="banner"
                    value={editedData.banner}
                    onChange={handleInputChange}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                />
                 <TextField
                    label="URL da Imagem do Logo"
                    name="logo"
                    value={editedData.logo}
                    onChange={handleInputChange}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                />
                
                <TextField
                    label="Nome"
                    name="name"
                    value={editedData.name}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Descrição"
                    name="description"
                    value={editedData.description}
                    onChange={handleInputChange}
                    fullWidth
                    multiline
                    rows={6}
                    margin="normal"
                />
            </StyledForm>
        </StyledEditContainer>
    );
}

export default Ong;