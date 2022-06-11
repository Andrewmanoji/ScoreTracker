import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ListViewComponent, StyleSheet, Text, View } from "react-native";
import { Button, CheckBox, Input } from "react-native-elements";

export default function App() {
  const [name, setName] = useState("");
  const [correct,setCorrect]=useState(false);
  const [false1,setFalse1]=useState(false);


const givesCorrect=()=>{
  setCorrect(true)
  setFalse1(false)
}
const givesFalse1=()=>{
  setFalse1(true)
  setCorrect(false)
}

  return (
    <View style={styles.container}>
      <Input
        placeholder="whats the capital of Tamil Nadu"
        value={name}
        onChange={(text) => setName(text)}
      />
      <CheckBox title="True"
      checked={correct} 
      onPress={givesCorrect}/>
        <CheckBox title="False"
      checked={false1} 
      onPress={givesFalse1}/>

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
