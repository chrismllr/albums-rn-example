import React from 'react';
import glamorous from 'glamorous-native';
import { spacing, palette, fontSize } from '../styles/common';

export const OpacityBtn = glamorous.touchableOpacity({
  borderRadius: 5,
  borderWidth: 1,
  backgroundColor: palette.red,
  borderColor: palette.red,
  padding: spacing.sp4
}, ({ fullWidth }) => ({
  alignSelf: fullWidth && 'stretch'
}));

export const BtnText = glamorous.text({
  textAlign: 'center',
  color: '#fff',
  fontSize: fontSize.fs4,
  margin: 0,
  fontWeight: '600'
});

export function FullBtn (props) {
  return (
    <OpacityBtn onPress={props.onPress} fullWidth>
      <BtnText>{props.children}</BtnText>
    </OpacityBtn>
  );
}
