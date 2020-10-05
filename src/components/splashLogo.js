import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
//<a target="_blank" href="https://icons8.com/icons/set/wrap">Wrap icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
const SplashLogo = () => {
  return (
    <View style={styles.logoViewStyle}>
      <Image source={require('../assets/logo.png')} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  logoViewStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
    backgroundColor: '#fff',
    width: 100,
    height: 100,
    borderRadius: 12,
    alignSelf: 'center',
    alignItems: 'center',
  },
});

export default SplashLogo;
