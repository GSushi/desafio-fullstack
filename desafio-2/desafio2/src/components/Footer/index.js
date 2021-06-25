import React from 'react';

import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import {
  ContainerFooter2, IconesFooter, Container
} from './styles';

export default function Footer() {
  return (
    <Container>
      <ContainerFooter2>
        <IconesFooter>
          <a href="tel:55(18)996845330"><PhoneIcon /></a>
          <a target="blank"><FacebookIcon /></a>
          <a target="blank"><InstagramIcon /></a>
          <a target="blank"><MailOutlineIcon /></a>
        </IconesFooter>
      </ContainerFooter2>
    </Container>
  )
}
