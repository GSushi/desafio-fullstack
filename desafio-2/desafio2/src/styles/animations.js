import { keyframes } from 'styled-components';


export const wobbleLeft = keyframes`
  0% {
    transform: translateX(-300px) ;
  };
  100% {
    transform:translateX(0);
  };
 `

export const wobbleRight = keyframes`
  0% {
    transform: translateX(300px) ;
  };
  100% {
    transform: translateX(0);
  };
`
export const Show = keyframes`
  0% {
    max-height: 0;
    overflow: hidden;
  };
  100% {
    max-height: 300px;
  };
`

export const Fade = keyframes`
  0% {
    opacity: 0;
  };
  100% {
    opacity: 1;
  };
`
