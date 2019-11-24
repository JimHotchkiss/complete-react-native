import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  const name = "Jimmy";
  return (
    <View>
      <Text style={styles.textStyle}>Getting Started with React Native</Text>
      <Text style={styles.nameText}>My Name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  nameText: {
    fontSize: 20
  }
});

export default ComponentsScreen;
