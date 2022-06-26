import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover",
  },
  titles: {
    marginTop: "30%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  buttonContainer: {
    marginBottom: "20%",
    alignItems: "center",
  },
});
