// @flow

import React from 'react';
import glamorous from 'glamorous-native';
import { BaseText } from '../shared/Text';
import { spacing, palette, fontSize } from '../styles/common';
import { shadow } from '../styles/utils';

type HeaderProps = {
  text: string
};

const HeaderContainer = glamorous.view({
  justifyContent: 'center',
  alignItems: 'center',
  height: 60,
  backgroundColor: palette.white,
  paddingTop: spacing.sp5,
  ...shadow.default,
  elevation: 2,
  position: 'relative'
});

export default function Header (props: HeaderProps) {
  return (
    <HeaderContainer>
      <BaseText fontSize={fontSize.fs6}>{props.text}</BaseText>
    </HeaderContainer>
  );
}
