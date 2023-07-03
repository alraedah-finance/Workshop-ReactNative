import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Hellow world 1</Text>
      </View>
      <Text style={styles.h1text}>Hellow world 2</Text>
      <Button title="tap me!" />
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
  h1text: {
    borderWidth: 1,
    padding: 10,
    borderColor: "blue",
  },
});
