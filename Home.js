import { View, Text, StyleSheet } from "react-native";
import React, { createContext } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  return (
    <View style={style.container}>
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
    paddingTop: 300,
  },
  text: {
    fontSize: 40,
  },
});
export default Home;
