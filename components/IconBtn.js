import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const IconBtn = ({ onPress, icon, color }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} color={color} size={25} />
    </Pressable>
  );
};

export default IconBtn;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
