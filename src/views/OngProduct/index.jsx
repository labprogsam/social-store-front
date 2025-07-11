import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import { TextField } from "@mui/material";
import { StyledContainer, StyledLeft, StyledRight, StyledMain } from "./styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";

const OngProduct = () => {
  const [name, setName] = useState("Boneca de pano");
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("Descriçãio lalala dsada ksado");
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

  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.id !== chipToDelete.id)
    );
  };

  return (
    <StyledMain className="home-main">
      <p>
        Home / Produtos / <span>criar</span>
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
              type="email"
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
              type="price"
            />
          </div>
          <TextField
            required
            multiline
            minRows={5}
            margin="normal"
            label="Descrição"
            value={desc}
            variant="outlined"
            onChange={(e) => setDesc(e.target.value)}
            fullWidth
            type="desc"
          />
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
        </StyledLeft>
        <StyledRight></StyledRight>
      </StyledContainer>
    </StyledMain>
  );
};

export default OngProduct;
