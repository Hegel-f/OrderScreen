import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigation from '@/navigators/MainNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      <MainNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
