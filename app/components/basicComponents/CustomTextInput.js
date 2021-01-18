import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../config/colors';

export default function CustomTextInput({ placeholder, style, ...otherProps }) {
  return (
    <View style={[styles.textInputcontainer, style]}>
      <TextInput placeholder={placeholder} {...otherProps} />
    </View>
  );
}

CustomTextInput.propTypes = {
  placeholder: PropTypes.string,
};

CustomTextInput.defaultProps = {
  placeholder: 'Aa',
};

const styles = StyleSheet.create({
  textInputcontainer: {
    borderColor: colors.lightgray,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: colors.white,
    marginBottom: 10,
  },
});
