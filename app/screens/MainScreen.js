import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from '../components/basicComponents/Screen';
import PlusButton from '../components/customComponents/PlusButton';
import colors from '../config/colors';

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: colors.lightgray,
    borderBottomWidth: 1,
    height: 40,
    paddingHorizontal: 20,
  },
});

export default function MainScreen() {
  return (
    <Screen>
      <View style={styles.tableContainer}>
        <Text style={{ color: colors.black, flex: 1 }}>Equipo</Text>
        <Text style={{ flex: 1 }}>Zona horario</Text>
      </View>
      <PlusButton />
    </Screen>
  );
}
