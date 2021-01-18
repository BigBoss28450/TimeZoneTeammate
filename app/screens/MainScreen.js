import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
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
  team: {
    color: colors.black,
    flex: 1,
    maxWidth: 100,
    height: 40,
    paddingTop: 10,
    borderRightColor: colors.lightgray,
    borderRightWidth: 1,
  },
  timezone: { flex: 1, paddingLeft: 20 },
});

export default function MainScreen({ navigation }) {
  // REDUX
  const teammates = useSelector((state) => state.teammates.teammates);
  return (
    <Screen>
      <View style={styles.tableContainer}>
        <Text style={styles.team}>Equipo</Text>
        <Text style={styles.timezone}>Zona horario</Text>
      </View>

      <FlatList
        data={teammates}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={() => (
          <Text style={{ textAlign: 'center', paddingTop: 10 }}>
            No hay compañeros en la lista
          </Text>
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: colors.lightgray }}></View>
        )}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
          >
            <Text style={{ flex: 1, maxWidth: 100 }}>{item.name}</Text>
            <Text style={{ flex: 1 }}>{item.city}</Text>
          </View>
        )}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
        }}
      >
        <PlusButton onPress={() => navigation.navigate('Add')} />
      </View>
    </Screen>
  );
}
