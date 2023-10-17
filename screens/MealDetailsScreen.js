import {
  Text,
  Image,
  StyleSheet,
  View,
  ScrollView,
  Button,
} from "react-native";
import { useContext, useLayoutEffect } from "react";
import React from "react";
import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconBtn from "../components/IconBtn";
import { FavContext } from "../store/Context/Fav-context";

const MealDetailsScreen = ({ route, navigation }) => {
  const data = route.params.catId;
  const favMealCtx = useContext(FavContext);
  const mealIsFav = favMealCtx.ids.includes(data.id);
  const changeFavHandler = () => {
    if (mealIsFav) {
      favMealCtx.removeFav(data.id);
    } else {
      favMealCtx.addFav(data.id);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconBtn
            onPress={changeFavHandler}
            color="white"
            icon={mealIsFav ? "star" : "star-outline"}
          />
        );
      },
    });
  }, [navigation, changeFavHandler]);

  return (
    <ScrollView style={styles.root}>
      <View style={styles.screen}>
        <Image source={{ uri: data.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{data.title}</Text>
        <MealDetail data={data} textStyle={styles.detailText} />
        <View style={styles.listContainer}>
          <Subtitle>Ingredients:</Subtitle>
          <List data={data.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={data.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  root: {
    marginBottom: 32,
  },
  screen: {
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    // fontFamily: "bold",
    fontSize: 24,
    textAlign: "center",
    margin: 8,
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
});
