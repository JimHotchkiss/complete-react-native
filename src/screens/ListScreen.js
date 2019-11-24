import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const friends = [
  { name: "Friend #1", age: 47 },
  { name: "Friend #2", age: 34 },
  { name: "Friend #3", age: 23 },
  { name: "Friend #4", age: 12 },
  { name: "Friend #5", age: 84 },
  { name: "Friend #6", age: 73 },
  { name: "Friend #7", age: 18 },
  { name: "Friend #8", age: 39 },
  { name: "Friend #9", age: 45 }
];

const ListScreen = () => {
  return (
    <FlatList
      // horizontal scroll
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      // this solves the key error
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age: {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});
export default ListScreen;
