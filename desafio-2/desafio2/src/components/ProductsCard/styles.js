import styled from 'styled-components';
import { colors, fonts } from '../../styles/config.js'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: relative;
    width: 220px;
    height: 100%;
    background-color: ${colors.white};
    padding: 10px;
    border: .1rem solid #e0e0e0;
    border-radius: 5px;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 8%);
    font-size: ${fonts.pDesktop};
    cursor: pointer;

    :hover {
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }

    p {
      margin: 10px 0;
    }

    h4 {
      font-size: ${fonts.pLarge};
      color: ${colors.greenLight};
      font-weight: 700;
    }

    h5 {
      font-weight: 500;
    }
`;
export const Image = styled.img`
    width: 100%;
    height: 185px;
    object-fit: cover;
`;

export const Button = styled.button`
    display: ${props => props.display};
    position: absolute;
    background-color: ${colors.yellow};
    padding: 4px 8px;
    border-radius: 4px;
    border: 0;
    text-align: center;
    font-size: ${fonts.pDesktop};
    font-weight: 800;
    color: ${colors.white};
    top: 85%;
    left: 75%;
    box-shadow: 0 0 7px rgb(0 0 0 / 10%);
    transition: .2s all;

    :hover {
      background: #ffd600;
    }
`;
