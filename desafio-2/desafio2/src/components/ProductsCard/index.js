import React, { useState } from 'react';
import { AddShoppingCart } from '@material-ui/icons';
import { Container, Image, Button } from './styles';

function ProductsCard({ title, price, src, parceled }) {
  const [display, setDisplay] = useState('none');

  return (
    <Container
      onMouseEnter={() => setDisplay('block')}
      onMouseLeave={() => setDisplay('none')}
    >
      <span>
        <Image src={src} />
        <p>{title}</p>
        <h4>R$ {price}</h4>
        <h5>{parceled}</h5>
      </span>

      <Button display={display}> <AddShoppingCart /> </Button>
    </Container>
  );
}

export default ProductsCard;
