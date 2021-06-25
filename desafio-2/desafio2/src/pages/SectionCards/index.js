import React from 'react';

import { Container } from './styles';

import ProductsCard from '../../components/ProductsCard/index';
import Carousel from '../../components/Carousel/index';
import Urucum from '../../assets/urucum.jpg';
import Vaso from '../../assets/vaso.jpg';

//simula api
const cards = [
  {
    id: 1,
    title: "Semente de Urucum",
    price: "200",
    image: Urucum,
    parceled: " 4x R$50"
  },
  {
    id: 2,
    title: "Vaso irrigável com suporte",
    price: "100 ",
    image: Vaso,
    parceled: " 4x R$25"
  },
  {
    id: 3,
    title: "Semente de algodão",
    price: "300",
    image: Urucum,
    parceled: " 5x R$60"

  },
  {
    id: 4,
    title: "Vaso irrigável com suporte Vaso irrigável com suporte",
    price: "500",
    image: Vaso,
    parceled: " 4x R$50"
  },
  {
    id: 5,
    title: "Semente de flores",
    price: "500",
    image: Urucum,
    parceled: " 4x R$50"

  },
  {
    id: 6,
    title: "Vaso irrigável com suporte",
    price: "500 ",
    image: Vaso,
    parceled: " 4x R$50"
  },
  {
    id: 7,
    title: "Semente de Urucum",
    price: "500",
    image: Urucum,
    parceled: " 4x R$50"

  },
  {
    id: 8,
    title: "Vaso irrigável com suporte",
    price: "500",
    image: Vaso,
    parceled: " 4x R$50"
  },
  {
    id: 9,
    title: "Semente de Urucum",
    price: "500",
    image: Urucum,
    parceled: " 4x R$50"
  },
  {
    id: 10,
    title: "Semente de Urucum",
    price: "500",
    image: Urucum,
    parceled: " 4x R$50"

  },

]


export default function SectionsCards() {
  return (
    <Container>

      <p> PRIMAVERE-SE, CULTIVE MAIS EM HORTAS VERTICAIS</p>

      <Carousel
        itens={cards.map(card => (
          <ProductsCard
            key={card.id}
            title={card.title}
            price={card.price}
            src={card.image}
            parceled={card.parceled}
          />
        ))}
        numMobile="1"
        numTablet="3"
        numDesktop="5"
        numLargeDesktop="7"
      />

      <p>MUDAS FRUTÍFERAS PARA VASOS OU SOLO</p>

      <Carousel
        itens={cards.map(card => (
          <ProductsCard
            key={card.id}
            title={card.title}
            price={card.price}
            src={card.image}
            parceled={card.parceled}
          />
        ))}
        numMobile="1"
        numTablet="3"
        numDesktop="5"
        numLargeDesktop="7"
      />

    </Container>
  );
}
