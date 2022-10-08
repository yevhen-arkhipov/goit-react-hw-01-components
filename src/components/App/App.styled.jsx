import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1280px;
  background-color: ${p => p.theme.colors.bodyColor};
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 1px, rgb(0 0 0 / 6%) 0px 4px 4px,
    rgb(0 0 0 / 16%) 1px 4px 6px;
`;
