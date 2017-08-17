import glamorous from 'glamorous-native';
import { palette } from '../styles/common';
import { shadow } from '../styles/utils';

export default glamorous.view({
  backgroundColor: palette.snow,
  ...shadow.light,
  borderRadius: 3,
  flex: 1
});
