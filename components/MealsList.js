import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import MealItem from "./MealItem";

const MealsList = ({ displayedMeals }) => {
  const renderMealItem = ({ item }) => {
    return <MealItem data={item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
