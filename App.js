import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Text>Another pice of text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0e8e8ff",
    alignItems: "center",
    justifyContent: "center",
    color: "blue",
  },
  input: {
    borderWidth: 1,
    borderColor: "red", // ✅ define color separately
    padding: 4, // ✅ number, not string
    margin: 2, // ✅ number, not string
    width: 200, // optional: adds better layout
    borderRadius: 4,
  },
});
