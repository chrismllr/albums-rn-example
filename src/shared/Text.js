// @flow
import glamorous from 'glamorous-native';
import { palette, fontSize, spacing } from '../styles/common';

type BaseTextProps = {
  themeColor: string,
  fontSize: number,
  fontWeight: string,
  marginBottom: number
};

export const BaseText = glamorous.text({
  color: palette.gray.dark,
  fontSize: fontSize.fs4,
  marginBottom: spacing.sp2
}, ({ themeColor, fontSize: size, fontWeight, marginBottom }: BaseTextProps) => ({
  color: palette[themeColor],
  fontSize: size,
  fontWeight,
  marginBottom
}));
