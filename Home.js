import { View, Text, StyleSheet } from "react-native";
import React, { createContext } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View>
        <Text style={style.text}>Enter Code</Text>
        <TextInput style={style.textInput}></TextInput>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Quiz");
        }}
      >
        <Text style={style.text}>Open Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    padding:40 ,
    margin: 50,
    backgroundColor: "yellow",
  },
  text: {
    fontSize: 40,
  },
  textInput: {
    paddingTop:12,
    backgroundColor: "white",
  },
});
export default Home;
