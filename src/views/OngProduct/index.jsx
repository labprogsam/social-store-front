import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ImageDropZone
} from '../../components';
import { styled } from '@mui/material/styles';
import { Button, TextField } from "@mui/material";
import { StyledContainer, StyledLeft, StyledRight, StyledMain, StyledSecondaryImages } from "./styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import toast, { Toaster } from "react-hot-toast";
import { getProduct, putProduct, postProduct } from "../../services/ong";

const OngProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");
  const [espec, setEspec] = useState("");
  const [chipData, setChipData] = useState([
    {
      id: 1,
      value: "Artesanato e Produtos",
    },
    {
      id: 2,
      value: "Alimentos e Bebidas",
    },
    {
      id: 3,
      value: "Roupas e Acessórios",
    },
    {
      id: 4,
      value: "Arte e Cultura",
    },
    {
      id: 5,
      value: "Produtos Sustentáveis",
    },
    {
      id: 6,
      value: "Higiene e Cosméticos",
    },
    {
      id: 7,
      value: "Itens de decoração",
    },
    {
      id: 8,
      value: "Outros",
    },
  ]);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return
    async function fetchProduct() {
      const response = await getProduct(id);

      setName(response?.title);
      setPrice(response?.price);
      setDesc(response?.description);
      setEspec(response?.specification);
      setChipData(response?.categories);
      if (response?.images[0]) setImage1(response?.images[0]);
      if (response?.images[1]) setImage2(response?.images[1]);
      if (response?.images[2]) setImage3(response?.images[2]);
      if (response?.images[3]) setImage4(response?.images[3]);
    }

    fetchProduct();
  }, [id]);

  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.id !== chipToDelete.id)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    let response;

    setIsLoading(true);
    if (id) {
      response = await putProduct(id, {
        "title": name,
        "description": desc,
        "price": Number(price),
        "images": [
          image1,
          image2,
          image3,
          image4
        ],
        "categories": [
          ...chipData.map(item => item.id)
        ],
        "specification": espec
      });
    } else {
      response = await postProduct({
        "title": name,
        "description": desc,
        "price": Number(price),
        "images": [
          image1,
          image2,
          image3,
          image4
        ],
        "categories": [
          ...chipData.map(item => item.id)
        ],
        "specification": espec
      });
    }
    setIsLoading(false);

    if (!response?.id) {
      toast.error(
        response?.data?.Error ||
        "Erro ao conectar com servidor. Tente novamente.",
      );
    } else {
      window.location.replace("/app/ong/home");
      toast.success(
        "Sucesso ao editar o produto!"
      );
    }
  }

  return (
    <StyledMain className="home-main">
      <Toaster
        toastOptions={{
          style: { borderRadius: "4px" },
          position: "top-right",
        }} />
      <p className="pathing">
        Home / Produtos / <b>criar</b>
      </p>
      <StyledContainer>
        <StyledLeft>
          <div className="row">
            <TextField
              required
              className="with-margin"
              margin="normal"
              label="Nome"
              value={name}
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />
            <TextField
              required
              className="minor-width"
              margin="normal"
              label="Preço (R$)"
              value={price}
              variant="outlined"
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              fullWidth
            />
          </div>
          <TextField
            required
            multiline
            minRows={9}
            margin="normal"
            label="Descrição"
            value={desc}
            variant="outlined"
            onChange={(e) => setDesc(e.target.value)}
            fullWidth
            type="desc"
          />
          <Box position="relative" display="inline-block" sx={{ marginTop: 2, width: "100%" }}>
            <Typography
              variant="caption"
              sx={{
                position: 'absolute',
                top: -10,
                left: 16,
                backgroundColor: 'white',
                px: 0.5,
                fontSize: '0.75rem',
                color: 'rgba(0, 0, 0, 0.6)'
              }}
            >Categorias
            </Typography>
            <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                listStyle: "none",
                p: 0.5,
                m: 0,
                height: "100%"
              }}
              component="ul"
            >
              {chipData?.map((data) => {
                let icon;

                if (data.value === "React") {
                  icon = <TagFacesIcon />;
                }

                return (
                  <ListItem key={data.id}>
                    <Chip
                      icon={icon}
                      label={data.value}
                      onDelete={
                        data.value === "React" ? undefined : handleDelete(data)
                      }
                    />
                  </ListItem>
                );
              })}
            </Paper>
          </Box>
        </StyledLeft>
        <StyledRight>
          <div className="main-photo">
            <ImageDropZone id={1} image={image1} setImage={setImage1} />
          </div>
          <StyledSecondaryImages>
            <ImageDropZone id={2} image={image1} setImage={setImage1} noText name="minor-upload" />
            <ImageDropZone id={3} image={image2} setImage={setImage2} noText name="minor-upload" />
            <ImageDropZone id={4} image={image3} setImage={setImage3} noText name="minor-upload" />
            <ImageDropZone id={5} image={image4} setImage={setImage4} noText name="minor-upload" />
          </StyledSecondaryImages>
          <TextField
            multiline
            minRows={5}
            margin="normal"
            label="Especificações"
            value={espec}
            variant="outlined"
            onChange={(e) => setEspec(e.target.value)}
            fullWidth
          />
        </StyledRight>
      </StyledContainer>
      <Button
        onClick={handleSubmit}
        sx={{ maxWidth: '1400px', marginTop: "20px", marginBottom: '50px', color: '#FFF' }}
        variant="contained"
        color="primary"
        loading={isLoading}
        fullWidth>Salvar</Button>
    </StyledMain>
  );
};

export default OngProduct;
