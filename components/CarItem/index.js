import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { styles } from "./styles";
import StyledButton from "../StyledButton";

const CarItem = ({
  car: {
    item: { name, tagline, image },
  },
}) => {
  return (
    <View style={styles.carContainer}>
      {/* Model Background */}
      <ImageBackground source={image} style={styles.image} />

      {/* Model Title Header */}
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline}</Text>
      </View>

      {/* Button Continaer */}
      <View style={styles.buttonContainer}>
        <StyledButton
          title="Custom Order"
          type="primary"
          onPress={() => console.warn("Custom Order is clicked")}
        />

        <StyledButton
          title="Existing Inventory"
          type="secondary"
          onPress={() => console.warn("Existing Inventory is clicked")}
        />
      </View>
    </View>
  );
};

export default CarItem;
