import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CarsList from "./components/CarsList";

import StyledButton from "./components/StyledButton";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}

      <CarsList />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
