import { useEffect, useState } from "react";
import { TextField, InputAdornment, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { CameraAlt, ErrorOutline, Upload, PersonOutline, AccountCircle, Phone } from "@mui/icons-material";
import { Toaster } from "react-hot-toast";
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
  const [modalOpen, setModalOpen] = useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [whatsappError, setWhatsappError] = useState("");
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

  const validateWhatsApp = (number) => {
    // Remove all non-digits
    const cleaned = number.replace(/\D/g, '');
    
    // Brazilian WhatsApp format: +55 (11) 99999-9999
    // Should have 11 digits (2 for country + 2 for area + 7-9 for number)
    if (cleaned.length !== 13 && cleaned.length !== 11) {
      return "Número deve ter 11 dígitos (DDD + número)";
    }
    
    // If it has 13 digits, it should start with 55 (Brazil)
    if (cleaned.length === 13 && !cleaned.startsWith('55')) {
      return "Para números internacionais, use o código do país 55";
    }
    
    // If it has 11 digits, check if it's a valid mobile number (9XXXX-XXXX)
    if (cleaned.length === 11) {
      const areaCode = cleaned.substring(0, 2);
      const number = cleaned.substring(2);
      
      // Valid area codes in Brazil (simplified check)
      const validAreaCodes = ['11', '12', '13', '14', '15', '16', '17', '18', '19', 
                              '21', '22', '24', '27', '28', '31', '32', '33', '34', 
                              '35', '37', '38', '41', '42', '43', '44', '45', '46', 
                              '47', '48', '49', '51', '53', '54', '55', '61', '62', 
                              '63', '64', '65', '66', '67', '68', '69', '71', '73', 
                              '74', '75', '77', '79', '81', '82', '83', '84', '85', 
                              '86', '87', '88', '89', '91', '92', '93', '94', '95', 
                              '96', '97', '98', '99'];
      
      if (!validAreaCodes.includes(areaCode)) {
        return "Código de área inválido";
      }
      
      // Mobile numbers should start with 9
      if (!number.startsWith('9')) {
        return "Número móvel deve começar com 9";
      }
    }
    
    return "";
  };

  const handleOpenModal = () => {
    setModalOpen(true);
    setWhatsappNumber(ongData?.whatsapp || "");
    setWhatsappError("");
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setWhatsappNumber("");
    setWhatsappError("");
  };

  const handleWhatsappChange = (e) => {
    const value = e.target.value;
    setWhatsappNumber(value);
    
    if (value.trim()) {
      const error = validateWhatsApp(value);
      setWhatsappError(error);
    } else {
      setWhatsappError("");
    }
  };

  const handleSaveWhatsapp = async () => {
    const error = validateWhatsApp(whatsappNumber);
    if (error) {
      setWhatsappError(error);
      return;
    }

    try {
      // Clean the number for storage
      const cleanedNumber = whatsappNumber.replace(/\D/g, '');
      
      // Update the ongData with the new WhatsApp number
      const updatedData = { ...ongData, whatsapp: cleanedNumber };
      
      // Call the API to update the profile
      await updateProfile(updatedData);
      
      // Update local state
      setOngData(updatedData);
      
      // Close modal
      handleCloseModal();
      
      // Show success message
      // Note: The toast should already be handled by the updateProfile function
    } catch (error) {
      setWhatsappError("Erro ao salvar número. Tente novamente.");
    }
  };

  return (
    <StyledContainer>
      <Toaster
        toastOptions={{
          style: { borderRadius: "4px" },
          position: "top-right",
        }} />
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
                onClick={handleOpenModal}
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
      
      {/* WhatsApp Registration Modal */}
      <Dialog 
        open={modalOpen} 
        onClose={handleCloseModal}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          Complete seu cadastro
        </DialogTitle>
        <DialogContent>
          <p style={{ marginBottom: '16px', color: '#666' }}>
            Para finalizar seu cadastro, adicione seu número do WhatsApp. Isso permitirá que os clientes entrem em contato diretamente com você.
          </p>
          <TextField
            fullWidth
            label="Número do WhatsApp"
            placeholder="(11) 99999-9999"
            value={whatsappNumber}
            onChange={handleWhatsappChange}
            error={!!whatsappError}
            helperText={whatsappError || "Digite seu número com DDD (apenas números)"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Phone />
                </InputAdornment>
              ),
            }}
            style={{ marginTop: '8px' }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">
            Cancelar
          </Button>
          <Button 
            onClick={handleSaveWhatsapp} 
            variant="contained" 
            color="primary"
            disabled={!!whatsappError || !whatsappNumber.trim()}
          >
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </StyledContainer>
  );
};

export default Ong;