import styled, { css } from 'styled-components';
import { wobbleLeft, wobbleRight } from '../../styles/animations';

export const CarouselContent = styled.div`
   display: flex;
   align-items: center;
   min-width: 100%;
   overflow-x: hidden;
   margin: auto;
   justify-content: space-between;

   .card-carousel{
     width: 100% ;
   }
`;

export const Slider = styled.div`
   display: flex;
   width: 100%;
   overflow-x: hidden;
   justify-content: center;

   ${props => props.wobble.active && props.wobble.direction === 'right' && css`
   animation:  ${wobbleRight} .5s forwards`}

   ${props => props.wobble.active && props.wobble.direction === 'left' && css`
   animation:  ${wobbleLeft} .5s forwards`}
`;

export const Button = styled.button`
   border: 0;
   outline: 0;
   background: transparent;
   align-self: center;
   position: absolute;
   align-content: end;
   left: ${props => props.left ? '95%' : '2.5%'};
   z-index: 2;

   > svg {
     font-size: 30pt;
     background: hsla(0,0%,100%,.8);
     border-radius: 30px;
     color: gray;
   }

   @media (max-width: 800px) {
    left: ${props => props.left ? '85%' : '2.5%'};
   }
`;

