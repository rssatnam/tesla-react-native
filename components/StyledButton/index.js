import { View, Text, Pressable } from "react-native";
import React from "react";
import { styles } from "./styles";

const StyledButton = ({ title, type, onPress }) => {
  return (
    <View style={styles.buttonInsideContainer}>
      <Pressable
        style={[
          styles.button,
          type === "secondary" && { backgroundColor: "#bbb" },
        ]}
        onPress={() => onPress()}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
