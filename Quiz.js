import React, { useState } from 'react'

import { CheckBox, Input } from "react-native-elements";
import { View, Image, StyleSheet, Text } from "react-native";


export default function Quiz() {
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

      <View >
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
  <Text></Text>
        <Text>Our new app to present the speedometer of quiz</Text>
        {/* <StatusBar style="auto" /> */}
      </View>
    );
}
