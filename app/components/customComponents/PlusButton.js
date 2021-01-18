import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  plusButtonContainer: {
    borderColor: colors.black,
    borderRadius: 20,
    borderWidth: 2,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function PlusButton({ color, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.plusButtonContainer}>
        <MaterialCommunityIcons name="plus" size={30} color={color} />
      </View>
    </TouchableOpacity>
  );
}

PlusButton.propTypes = {
  color: PropTypes.string,
  onPress: PropTypes.func,
};

PlusButton.defaultProps = {
  color: colors.black,
  onPress: () => {},
};
