import React from 'react';
import { Animated } from 'react-native';

export class FadeInUp extends React.Component {
  state = {
    opacity: new Animated.Value(0),
    translate: new Animated.Value(100)
  }

  componentDidMount () {
    Animated.timing(
      this.state.opacity,
      {
        toValue: 1,
        duration: 800
      }
    ).start();

    Animated.spring(
      this.state.translate,
      {
        toValue: 0,
        tension: 2,
        friction: 6
      }
    ).start();
  }

  render () {
    const { opacity, translate } = this.state;

    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity,
          transform: [{ translateY: translate }]
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
