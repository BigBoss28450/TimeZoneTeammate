import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../config/colors";

export default function CustomButton({ title }) {
  return (
    <TouchableOpacity>
      <View style={styles.buttonContainer}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.lightgray,
    borderRadius: 10,
  },
});
