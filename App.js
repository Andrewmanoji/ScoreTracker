import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CheckBox, Input } from "rect-native-elements";

export default function App() {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <Input
        placeholder="whats the capital of Tamil Nadu"
        value={name}
        onChange={(text) => setName(Text)}
      />

      <Text>Our new app to present the speedometer of quiz</Text>
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
