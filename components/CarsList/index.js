import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import CarItem from "../CarItem";
import cars from "./cars";

export default function CarsList() {
  return (
    <View style={{ width: "100%" }}>
      <FlatList
        data={cars}
        renderItem={(item) => <CarItem car={item} />}
        snapToAlignment="start"
        decelerationRate="slow"
        snapToInterval={Dimensions.get("screen").height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
