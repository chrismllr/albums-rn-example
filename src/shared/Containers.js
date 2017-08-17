// @flow
import glamorous from 'glamorous-native';
import { palette, spacing } from '../styles/common';

export const Container = glamorous.view({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: palette.white,
  padding: spacing.sp4
});

type FlexProps = {
  vSpacing: number,
  vOffset: number,
  hSpacing: number,
  hOffset: number,

  flexDirection: string,
  alignItems: string,
  justifyContent: string,

  flex: number
};

export const FlexContainer = glamorous.view({
}, (props: FlexProps) => ({
  paddingTop: props.vSpacing,
  paddingBottom: props.vSpacing,
  marginTop: props.vOffset,
  marginBottom: props.vOffset,

  paddingLeft: props.hSpacing,
  paddingRight: props.hSpacing,
  marginLeft: props.hOffset,
  marginRight: props.hOffset,

  flexDirection: props.flexDirection,
  alignItems: props.alignItems,
  justifyContent: props.justifyContent,
  flex: props.flex
}));
