import styled from 'styled-components';
import { fonts, colors } from '../../styles/config.js'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-width: 100%;
    margin-bottom: 5%;

    .card-carousel {
     width: auto !important;
     padding: 10px 3px;
   }

   > p {
      color: ${colors.greenLight};
      font-size: ${fonts.pDesktop};
      font-weight: 700;
      margin-top: 1.5%;
      width: 85%;
      border-bottom: 2px solid lightgrey;
      padding: 5px;
    }

`;
