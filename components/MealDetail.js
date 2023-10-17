import { View, Text, StyleSheet } from "react-native";
import React from "react";

const MealDetail = ({ data, style, textStyle }) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={textStyle}>{data.duration}M</Text>
      <Text style={textStyle}>{data.complexity.toUpperCase()}</Text>
      <Text style={textStyle}>{data.affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 8,
    gap: 8,
  },
});
