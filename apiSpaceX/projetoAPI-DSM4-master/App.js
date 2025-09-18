import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from './src/services/theme';
import Routes from './src/routes';

export default function App() {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});