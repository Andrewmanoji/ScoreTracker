import { View, Text, StyleSheet } from "react-native";
import React, { createContext } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
// const [code,setCode]=useState(null)

  return (
    <View style={style.container}>
      <View>
        <Text style={style.text}>Enter Code</Text>
        <TextInput style={style.textInput}>0G67</TextInput>
      </View>

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
    backgroundColor: "yellow",
  },
  text: {
    fontSize: 40,
  },
  textInput: {
    fontSize:30,
    paddingTop: 12,
    backgroundColor: "white",
  },
  open: {
    fontSize: 43,
    backgroundColor: "blue",
    color: "white",
  },
  quiz:{
    paddingTop:33
  }
});
export default Home;
