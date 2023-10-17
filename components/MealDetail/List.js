import { View, Text, StyleSheet } from "react-native";
import React from "react";

const List = ({ data }) => {
  return data.map((ingredient) => (
    <View key={ingredient} style={styles.list}>
      <Text style={styles.itemText}>{ingredient}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  list: {
    borderRadius: 7,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
});
