import styled from "styled-components";
import { colors, fonts } from '../../styles/config.js'
import { Fade } from '../../styles/animations.js';

export const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${colors.greenLight};
    font-size: ${fonts.pDesktop};
    font-weight: 600;

    .row-content {
      min-height: 75px;
      top: 0;
      left: 0;
      position: fixed;
      z-index: 100;
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      align-items: center;
      padding: 5px 5px 0 5px;
      background: inherit;
      border-bottom: 1px solid #ededed;
    }

    .row-content--step {
      display: flex;
      width: 100%;
      align-items: center;
      padding: 0 10px;
      background: ${colors.white};

      svg {
        cursor: pointer;

        :hover {
          color: ${colors.greenHover};
        }
      }
    }

   .row-products {
     background: inherit;
     margin-top: 90px;
     display: flex;
     width: 100%;
     justify-content: space-evenly;
   }

   .dropdown {
      svg {
        font-size: 25px;
      }
   }

   .dropdown-btn {
      color: ${colors.greenLight};
      border: 1px solid ${colors.greenLight};
      padding: 5px 35px;
      border-radius: 4px;
      box-shadow: 0px 0px 5px rgb(0 0 0 / 10%);
    }

   .MuiFilledInput-root{
     border-radius: 10px;
     height: 45px;
     width: 100%;
     border: 1px solid lightgray;
     background-color: ${colors.white};
     box-shadow: 0 0 19px rgb(0 0 0 / 10%);

     :hover {
      background: ${colors.greyLight};
     }
   }

   .MuiFormControl-root{
     border-radius: 10px;
     height: 45px;
     width: 40%;
   }

   .MuiFilledInput-input {
     padding: 0 20px;
   }

   @media(max-width: 800px) {
    .nav-products {
      display: none;
    }

    .dropdown {
      width: 100%;
      padding-top: 20px;
    }

    .icons-box {
      display: none;
    }

   }
`;

export const ContainerBot = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${colors.greenLight};
`;

export const Icons = styled.div`
  height: 65px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  cursor: pointer;

  > svg {
    font-size: 35px;
  }

  :hover {
    svg, div, p {
      color: ${colors.greenHover};
    }
  }

  p {
    display: flex;
    align-items: center;
  }

  .icons-box {
    padding: 5px;

    > span {
       color: gray;
       font-size: ${fonts.pMobile};
       font-weight: 500;
    }

    > p {
      border-bottom: 1px solid lightgray;
    }

  }
`;

export const Image = styled.img`
  width: 90px;
  height: auto;
  cursor: pointer;
  padding: 5px;
`;

export const Paper = styled.div`
  position: relative;
  background-color: ${colors.white};
  border-top: 1px solid lightgray;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 15px 5px;
  animation: ${Fade} .4s;
  color: black;
  font-size: ${fonts.pMobile};
  border: 1px solid #DCDCDC;

  @media(max-width: 800px) {
    width: auto;
    flex-direction: column;
  }

  b {
    color: ${colors.greenLight};
    border-bottom: 1px solid ${colors.greenLight};
    padding: 0px 35px;
  }

  > div > p {
    margin-top: 8px;
    font-weight: 500;
    text-align: center;

    :hover {
      color: ${colors.greenHover};
    }
  }
`;

export const MenuItem = styled.div`
  padding: 15px;
  background: ${props => props.open ? '#e5e3e3' : 'inital'};
  transition: background .2s;

  display: flex;
  align-items: center;
  justify-content: space-between;

  :hover {
    background: #e5e3e3;
  }
`;

export const PaperContainer = styled.div`
  position: absolute;
  flex-direction: row;
  display: flex;
  z-index: 10;
  margin-left: 30px;
  width: auto;
  padding: 2px 10px;
`;
