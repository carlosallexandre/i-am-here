import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FCFDFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 24,
  },
  input: {
    backgroundColor: "#1f1f1f",
    color: "#FCFDFE",
    height: 56,
    borderRadius: 5,
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 12,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fbfbfb",
    fontSize: 24,
  },
  emptyTextList: {
    color: "#FBFBFB",
    fontSize: 14,
    textAlign: "center",
  },
});
