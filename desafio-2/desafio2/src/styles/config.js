import styled from 'styled-components';


export const colors = {
  greyLight: `#F3F3F3`,
  greyDark: `#4e595a`,
  greenLight: `#008036`,
  greenDark: `#035C28`,
  greenDarken: `#357c4d`,
  yellow: '#ffc322',
  white: '#ffff',
  greenOlive: '#629661',
  greenHover: '#0aa84c',
};

export const fonts = {
  pMobile: `12px`,
  pDesktop: `14px`,
  pLarge: `16px`,
  h4Desktop: `24px`,
}

export const ContainerAdm = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
