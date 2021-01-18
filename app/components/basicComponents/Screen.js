import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import colors from '../../config/colors';

export default function Screen({ children }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.lightWhite }}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
