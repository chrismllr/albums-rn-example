import React from 'react';
import { View, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import Interactable from 'react-native-interactable';
import { palette } from '../../styles/common';

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: '100%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonImage: {
    width: 40,
    height: 40
  }
});

export class SwipeRow extends React.Component {
  _deltaX = new Animated.Value(0);

  onButtonPress = (msg) => () => {
    alert(msg);
  }

  render () {
    const damping = 1 - 0.6;
    const tension = 300;

    return (
      <View style={{ marginBottom: 16 }}>
        <Animated.View
          style={[{
            backgroundColor: palette.red,
            borderTopRightRadius: 3,
            borderBottomRightRadius: 3,
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            flexDirection: 'row',
            alignItems: 'center'
          }, {
            opacity: this._deltaX.interpolate({
              inputRange: [-125, -80],
              outputRange: [1, 0]
            })
          }]}
        >
          <TouchableOpacity style={[styles.button]} onPress={this.onButtonPress('Remove!')}>
            <Animated.Image
              source={require('../../assets/icon-trash.png')}
              style={[
                styles.buttonImage, {
                  opacity: this._deltaX.interpolate({
                    inputRange: [-150, -115],
                    outputRange: [1, 0],
                    extrapolateLeft: 'clamp',
                    extrapolateRight: 'clamp'
                  }),
                  transform: [{
                    scale: this._deltaX.interpolate({
                      inputRange: [-150, -115],
                      outputRange: [1, 0.7],
                      extrapolateLeft: 'clamp',
                      extrapolateRight: 'clamp'
                    })
                  }]
                }
              ]}
            />
          </TouchableOpacity>
        </Animated.View>

        <Interactable.View
          horizontalOnly
          snapPoints={[
            { x: 75, damping: 1 - damping, tension },
            { x: 0, damping: 1 - damping, tension },
            { x: -150, damping: 1 - damping, tension }
          ]}
          dragToss={0.01}
          animatedValueX={this._deltaX}
        >
          <View>
            {this.props.children}
          </View>
        </Interactable.View>
      </View>
    );
  }
}

