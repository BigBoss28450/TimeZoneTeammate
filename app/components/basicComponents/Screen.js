import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Screen({ children }) {
  return <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({});
