import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal,
  Animated,
  TextInput,
} from "react-native";
import { COLORS, SIZES } from "./constants";
import data from "./QuizData";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function Quiz({ navigation }) {
  const allQuestions = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionDisabled, setIsOptionDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  const renderQuestion = () => {
    return (
      <View
        style={{
          marginVertical: 20,
        }}
      >
        {/* Question counter */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontSize: 20,
              opacity: 0.6,
              marginRight: 2,
            }}
          >
            {" "}
            {currentQuestionIndex + 1}{" "}
          </Text>

          <Text style={{ color: COLORS.white, fontSize: 18, opacity: 0.6 }}>
            / {allQuestions.length}
          </Text>
        </View>

        {/* Questions */}
        <Text
          style={{
            color: COLORS.white,
            fontSize: 30,
          }}
        >
          {allQuestions[currentQuestionIndex]?.question}
        </Text>
      </View>
    );
  };

  const validateAnswer = (selectedOption) => {
    let correct_option = allQuestions[currentQuestionIndex]["correct_option"]; //get correct answer/option from data
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    if (selectedOption == correct_option) {
      //Set Score
      setScore(score + 1);
    }
    //Show Next Button
    setShowNextButton(true);
  };
  const handleNext = () => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      setShowScoreModal(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionDisabled(false);
      setShowNextButton(false);
    }
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const viewScore = () => {
    navigation.navigate("Score",score)
    setShowScoreModal(false);

    setCurrentQuestionIndex(0);
    setScore(0);
    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionDisabled(false);
    setShowNextButton(false);
    Animated.timing(progress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const renderOptions = () => {
    return (
      <View
        style={{
          marginVertical: 10,
        }}
      >
        {allQuestions[currentQuestionIndex]?.options.map((option) => (
          <TouchableOpacity
            key={option}
            onPress={() => validateAnswer(option)}
            disabled={isOptionDisabled}
            style={[
              styles.optionstyle,
              {
                borderColor:
                  option == correctOption
                    ? COLORS.success
                    : option == currentOptionSelected
                    ? COLORS.error
                    : COLORS.background + "40",
                backgroundColor:
                  option == correctOption
                    ? COLORS.success + "20"
                    : option == currentOptionSelected
                    ? COLORS.error+ "20"
                    : COLORS.accent + "20",
              },
            ]}
          >
            <Text style={{ fontSize: 20, color: COLORS.white }}>{option}</Text>

            {/* show right or wrong icon */}
            {option == correctOption ? (
              <View style={styles.tickstyle}>
                <MaterialCommunityIcons
                  name="check"
                  style={{ color: COLORS.white, fontSize: 20 }}
                />
              </View>
            ) : option == currentOptionSelected ? (
              <View style={styles.crossstyle}>
                <MaterialCommunityIcons
                  name="close"
                  style={{ color: COLORS.white, fontSize: 20 }}
                />
              </View>
            ) : null}
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity
          onPress={handleNext}
          style={{
            marginTop: 20,
            width: "100%",
            backgroundColor: COLORS.accent,
            padding: 20,
            borderRadius: 5,
          }}
        >
          <Text
            style={{ fontSize: 20, color: COLORS.white, textAlign: "center" }}
          >
            Next
          </Text>
        </TouchableOpacity>
      );
    }
  };

  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ["0%", "100%"],
  });
  const renderProgressBar = () => {
    return (
      <View
        style={{
          width: "100%",
          height: 20,
          borderRadius: 20,
          backgroundColor: "#00000020",
        }}
      >
        <Animated.View
          style={[
            {
              height: 20,
              borderRadius: 20,
              backgroundColor: COLORS.accent,
            },
            {
              width: progressAnim,
            },
          ]}
        ></Animated.View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <View
        style={{
          flex: 1,
          paddingVertical: 40,
          paddingHorizontal: 16,
          backgroundColor: COLORS.background,
          position: "relative",
        }}
      >
        <View style={{ marginTop: 0, padding: 20 }}></View>
        {/* Progress bar */}
        {renderProgressBar()}

        {/* Questions*/}
        {renderQuestion()}

        {/* Options*/}
        {renderOptions()}

        {/* Next Button*/}
        {renderNextButton()}

        {/* Score Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showScoreModal}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.primary,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={styles.scoreModalstyle}>
              {/* <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                {" "}
                {score > allQuestions.length / 2
                  ? "Congratulations!!"
                  : "Ooopps!"}{" "}
              </Text> */}

              {/* <View style={styles.scoreStyle}> */}
                {/* <Text
                  style={{
                    fontSize: 30,
                    color:
                      score > allQuestions.length / 2
                        ? COLORS.success
                        : COLORS.error,
                  }}
                >
                  {" "}
                  {score}
                </Text> */}
                {/* <Text style={{ fontSize: 20, color: COLORS.black }}>
                  {" "}
                  / {allQuestions.length}
                </Text> */}
              {/* </View> */}
              {/* Try Again button */}
              <TouchableOpacity
                onPress={viewScore}
                style={styles.scorebutton}
              >
                <Text style={styles.scoreText}>View Score</Text>
              </TouchableOpacity>
             
            </View>
          </View>
        </Modal>

      
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  optionstyle: {
    borderWidth: 3,

    height: 60,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  tickstyle: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: COLORS.success,
    justifyContent: "center",
    alignItems: "center",
  },
  crossstyle: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: COLORS.error,
    justifyContent: "center",
    alignItems: "center",
  },
  scoreModalstyle: {
    backgroundColor: COLORS.white,
    width: "90%",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  scoreStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 20,
  },
  scorebutton: {
    backgroundColor: COLORS.accent,
    padding: 20,
    width: "100%",
    borderRadius: 20,
  },
  scoreText: {
    textAlign: "center",
    color: COLORS.white,
    fontSize: 20,
  },
});

export default Quiz;
