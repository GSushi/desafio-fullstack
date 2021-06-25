import React, { useState } from "react";

import {
  Container,
  Icons,
  Image,
  ContainerBot,
  Paper,
  PaperContainer,
} from "./styles";

import { Menu, Search, ShoppingCartOutlined, PersonOutlineOutlined } from '@material-ui/icons';
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

import Logo from "../../assets/Logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container>
        <div className="row-content">
          <Image src={Logo} />

          <TextField
            placeholder="Olá, o que você procura?"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search style={{ color: "#008036" }} />
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
            variant="filled"
          />

          <Icons>
            <ShoppingCartOutlined />
            <div className="icons-box">
              <p>Meu carrinho</p>
              <span> 0 itens </span>
            </div>
          </Icons>

          <Icons>
            <PersonOutlineOutlined />
            <div className="icons-box">
              <p>Minha conta</p>

              <span>Faça login ou cadastre-se</span>
            </div>
          </Icons>
        </div>

        <div className="row-products">

          <div className="dropdown"
            onMouseLeave={() => {
              setOpen(false);
            }}>
            <Icons>
              <p
                className="dropdown-btn"
                onMouseOver={() => {
                  setOpen(true);
                }}
              >
                <Menu style={{ marginRight: '10px' }} />
                Categorias
              </p>

            </Icons>
            {open && (
              <PaperContainer>
                <Paper>
                  <div>
                    <p> <b> SEMENTES </b> </p>
                    <p>  Semente de soja </p>
                    <p>  Semente de soja </p>
                    <p>  Semente de soja </p>
                  </div>
                  <div>
                    <p> <b> AGRICULTURA </b> </p>
                    <p>  Semente de Soja </p>
                    <p>  Semente de Soja </p>
                  </div>
                  <div>
                    <p> <b> HORTA E JARDIM </b> </p>
                    <p> Vaso </p>
                    <p> Vaso </p>
                    <p> Vaso </p>
                  </div>
                </Paper>
              </PaperContainer>
            )}
          </div>
          <Icons className="nav-products">
            <p> Flores </p>
          </Icons>

          <Icons className="nav-products">
            <p> Hortaliças </p>
          </Icons>

          <Icons className="nav-products">
            <p> Bulbos </p>
          </Icons>

          <Icons className="nav-products">
            <p> Vasos </p>
          </Icons>

          <Icons className="nav-products">
            <p> Utensílios</p>
          </Icons>

          <Icons className="nav-products">
            <p> Irrigação </p>
          </Icons>

          <Icons className="nav-products">
            <p> Adubos </p>
          </Icons>
        </div>

        <ContainerBot />
      </Container>
    </>
  );
}

export default Navbar;
