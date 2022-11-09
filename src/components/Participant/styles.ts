import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 5,
    backgroundColor: "#1F1E25",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
    color: "#FFF",
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#e23e44",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fbfbfb",
    fontSize: 24,
  },
});
