import { StatusBar } from "react-native";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Home />
    </>
  );
}
