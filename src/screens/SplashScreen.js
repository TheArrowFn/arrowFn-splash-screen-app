import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import SplashLogo from '../components/splashLogo';

const SplashSceen = () => {
  return (
    <SafeAreaView style={styles.safeViewStyle}>
      <View style={styles.viewStyle}>
        <SplashLogo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeViewStyle: {
    backgroundColor: '#F9CA47',
    flex: 1,
    justifyContent: 'center',
  },
  viewStyle: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
    alignSelf: 'center',
  },
});

export default SplashSceen;
