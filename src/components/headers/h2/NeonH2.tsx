import React from 'react';
import styled from 'styled-components';
import { NeonHeaderProps, StyledNeonHeaderProps } from '../index.types';
import { NeonStyle } from '../../index.types';
import { Effect } from '../../../enums';
import { text, border, reflection } from '../../styles';
import { getStyleForEffect } from '../../../utils/effect';

const StyledH2 = styled.h2.attrs<StyledNeonHeaderProps>(({ headerProps }) => ({
  ...headerProps
}))<StyledNeonHeaderProps>`
  display: inline-block;
  ${text}

  ${({ neonStyle }) => getStyleForEffect(neonStyle.effect)}
  
  ${({ neonStyle }) => neonStyle.border && border}

  ${({ neonStyle }) => neonStyle.reflection && reflection}
`;

const NeonH2: React.FC<NeonHeaderProps> = ({
  children,
  color,
  fontSize,
  effect,
  border,
  reflection,
  ...headerProps
}): React.ReactElement => {
  const neonStyle: NeonStyle = {
    color,
    fontSize: fontSize ?? '3.1rem',
    effect: effect ?? Effect.Glow,
    border: border ?? false,
    reflection: reflection ?? false
  };

  return (
    <StyledH2 neonStyle={neonStyle} headerProps={headerProps} content={children?.toString()}>
      {children}
    </StyledH2>
  );
};

export default NeonH2;
