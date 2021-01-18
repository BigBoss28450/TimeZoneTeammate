import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../config/colors';

export default function ErrorMessage({ error }) {
  return (
    <View>
      {error && (
        <Text
          style={{ color: colors.error, textAlign: 'center', marginBottom: 10 }}
        >
          {error}
        </Text>
      )}
    </View>
  );
}
