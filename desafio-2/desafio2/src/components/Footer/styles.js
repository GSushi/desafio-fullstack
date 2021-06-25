import styled from 'styled-components';
import { colors } from '../../styles/config.js'

export const Container = styled.div`
    width: 100%;

    .MuiSvgIcon-root {
    fill: white;
    }

`;

export const ContainerFooter1 = styled.div`
    padding: 5px;
    color: white;
    background-color: ${colors.greenLight};
    font-size: 13px;
    text-align: center;
    letter-spacing: 8px;
    line-height: 1.5;
    width: 100%;
`;

export const ContainerFooter2 = styled.div`
    padding: 15px;
    color: white;
    background-color: ${colors.greenDark};
    font-size: 15px;
    text-align: center;
    width: 100%;
`;

export const MensagemFooter = styled.p`
    padding: 16px;
`;

export const InputFooter = styled.input`
    padding: 16px;
    width: 550px;
    height: 35px;
    color: grey;
    background-color: white;
    border-radius: 10px;
    border: 0;
`;

export const IconesFooter = styled.div`
    padding-top: 9px;
    padding-bottom: 3px;

    svg{
        font-size: 70px;
        padding-left: 15px;
        padding-right: 15px;
        cursor: pointer;
        transition: .2s all;

        :hover {
          transform: scale(1.1);
        }
    }
`;
