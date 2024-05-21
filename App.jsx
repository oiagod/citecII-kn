import { StyleSheet, View, useWindowDimensions } from "react-native";
import Form from "./form";
import Cam from "./cam";

export default function App() {
  const { height } = useWindowDimensions();

  return (
    <View style={StyleSheet.absoluteFill}>
        <Cam />
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
  br: {
    height: 12,
  },
  btn: {
    backgroundColor: "#222",
    padding: 10,
  },
  btnText: {
    color: "#fff",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
