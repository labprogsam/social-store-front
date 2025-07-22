import { useEffect, useState } from "react";
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

const OngProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [espec, setEspec] = useState("");
  const [chipData, setChipData] = useState([
    {
      id: 0,
      name: "Artesanato e Produtos",
    },
    {
      id: 1,
      name: "Alimentos e Bebidas",
    },
    {
      id: 2,
      name: "Roupas e Acessórios",
    },
    {
      id: 3,
      name: "Arte e Cultura",
    },
    {
      id: 4,
      name: "Produtos Sustentáveis",
    },
    {
      id: 5,
      name: "Higiene e Cosméticos",
    },
    {
      id: 6,
      name: "Itens de decoração",
    },
    {
      id: 7,
      name: "Outros",
    },
  ]);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [image5, setImage5] = useState(null);

  useEffect(() => {
    // TODO: faça requisição e salve nos campos apropriados
  }, [])

  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.id !== chipToDelete.id)
    );
  };

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <StyledMain className="home-main">
      <p className="pathing">
        Home / Produtos / <b>criar</b>
      </p>
      <StyledContainer onSubmit={onSubmit}>
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
              label="Preço"
              value={price}
              variant="outlined"
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
          <Box position="relative" display="inline-block" sx={{ marginTop: 2 }}>
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
              }}
              component="ul"
            >
              {chipData.map((data) => {
                let icon;

                if (data.name === "React") {
                  icon = <TagFacesIcon />;
                }

                return (
                  <ListItem key={data.id}>
                    <Chip
                      icon={icon}
                      label={data.name}
                      onDelete={
                        data.name === "React" ? undefined : handleDelete(data)
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
            <ImageDropZone id={2} image={image2} setImage={setImage2} noText name="minor-upload" />
            <ImageDropZone id={3} image={image3} setImage={setImage3} noText name="minor-upload" />
            <ImageDropZone id={4} image={image4} setImage={setImage4} noText name="minor-upload" />
            <ImageDropZone id={5} image={image5} setImage={setImage5} noText name="minor-upload" />
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
        type="submit"
        sx={{ maxWidth: '1400px', marginTop: "20px", marginBottom: '50px', color: '#FFF' }}
        variant="contained"
        color="primary"
        fullWidth>Salvar</Button>
    </StyledMain>
  );
};

export default OngProduct;
