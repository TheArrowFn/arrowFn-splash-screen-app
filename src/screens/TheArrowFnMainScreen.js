import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';

const TheArrowFnMainScreen = () => {
  return (
    <SafeAreaView style={styles.viewStyle}>
      <View>
        <Text style={styles.textStyle}>->{}</Text>
        <Text style={styles.textStyle}>TheArrowFn</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
    alignSelf: 'center',
  },
});

export default TheArrowFnMainScreen;
