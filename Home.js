import { View, Text, StyleSheet } from "react-native";
import React, { createContext } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import {COLORS, SIZES} from "./constants"
const Home = ({ navigation }) => {
// const [code,setCode]=useState(null)

  return (
  
    <View style={style.container}>
      {/* <View style={style.quiz}>
        <Text style={style.text}>Enter Code</Text>
        <TextInput style={style.textInput}>0G67</TextInput>
      </View> */}

      <View style={style.quiz}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Quiz");
          }}
        >
          <Text style={style.open}>Open Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
   
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 40,
    margin: 50,
    flex:1,
    justifyContent: "center",
    // backgroundColor: "yellow",
  },
  // text: {
  //   fontSize: 40,
  //   backgroundColor: "blue",
  //   color: "white",
  //   borderRadius: 7,
  // },
  textInput: {
    fontSize: 30,
    padding: 8,
    backgroundColor: "white",
    borderRadius: 7,
  },
  open: {
    fontSize: 43,
    padding:20,
    backgroundColor: "blue",
    color: "white",
    borderRadius: 7,
  },
  quiz: {
    paddingTop: 33,
    paddingBottom: 25,
  },
});
export default Home;
