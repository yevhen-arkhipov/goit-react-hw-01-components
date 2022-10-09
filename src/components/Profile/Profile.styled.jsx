import styled from 'styled-components';

export const Photo = styled.img`
  width: 150px;
  border: 1px solid ${p => p.theme.colors.photoBorderColor};
  border-radius: 50%;
`;

export const TextName = styled.h3`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l}px;
`;

export const DiscriptionText = styled.p`
  color: ${p => p.theme.colors.secondText};
  font-size: ${p => p.theme.fontSizes.s}px;
`;
