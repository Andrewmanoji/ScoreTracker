import { View, Text, StyleSheet } from "react-native";
import React, { createContext, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import RNSpeedometer from "react-native-speedometer";

const Score = ({ navigation, route }) => {
  const final = route.params;

  return (
    <View styles={styles.speed}>
      <RNSpeedometer
        // value={meterValue}
        value={final}
        //value for Speedometer
        size={380}
        //Size of Speedometer
        minValue={0}
        //Min value for Speedometer
        maxValue={10}
        //Max value for Speedometer
        allowedDecimals={0}
        //Decimals value allowed or not
        labels={[
          {
            name: "Poor",
            labelColor: "#ff2900",
            activeBarColor: "#ff2900",
          },
          {
            name: "Good",
            labelColor: "#f4ab44",
            activeBarColor: "#f4ab44",
          },
          {
            name: "Very good",
            labelColor: "#00ff6b",
            activeBarColor: "#00ff6b",
          },
        ]}
        //Labels for the different steps of Speedometer
      />
    </View>
  );
};

const styles = StyleSheet.create({
  speed:{

}
})
export default Score;
