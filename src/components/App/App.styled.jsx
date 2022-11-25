import styled from 'styled-components';

export const Container = styled.main`
  width: 1280px;
  background-color: ${p => p.theme.colors.bodyColor};
  box-shadow: ${p => p.theme.shadows.outline};
`;
