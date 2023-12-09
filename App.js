import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View, Text, StatusBar } from "react-native";
import { Button } from "./components";

export default function App() {
  const [previousValue, setPreviousValue] = useState("0");
  const [currentValue, setCurrentValue] = useState("0");
  const [operator, setOperator] = useState("");
  const [equalsRepeated, setEqualsRepeated] = useState(false);

  buttonHandler = (value) => {
    setCurrentValue(currentValue != "0" ? currentValue + value : value);
  }

  equalHandler = () => {
    firstVal = parseFloat(equalsRepeated ? currentValue : previousValue);
    secondVal = parseFloat(equalsRepeated ? previousValue : currentValue);

    switch (operator)
    {
      case "+":
        setCurrentValue(`${firstVal + secondVal}`);
        break;
      case "-":
        setCurrentValue(`${firstVal - secondVal}`);
        break;
      case "/":
        setCurrentValue(secondVal != 0 ? `${firstVal / secondVal}` : "Can't divide by zero");
        break;
      case "x":
        setCurrentValue(`${firstVal * secondVal}`);
    }
    
    if (!equalsRepeated) setPreviousValue(currentValue);

    setEqualsRepeated(true);
  }

  operatorHandler = (value) => {
    setOperator(value);
    setPreviousValue(currentValue);
    setCurrentValue("0");
  }

  resetState = () => {
    setPreviousValue("0");
    setCurrentValue("0");
    setOperator("");
    setEqualsRepeated(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={"#121212"}/>
      <View style={styles.display}>
        <Text style={styles.displayText}>
          {currentValue}
        </Text>
      </View>
      <View style={styles.row}>
        <Button text="7" onPress={() => this.buttonHandler("7")}/>
        <Button text="8" onPress={() => this.buttonHandler("8")}/>
        <Button text="9" onPress={() => this.buttonHandler("9")}/>
        <Button text="/" style="operator" onPress={() => this.operatorHandler("/")}/>
      </View>
      <View style={styles.row}>
        <Button text="4" onPress={() => this.buttonHandler("4")}/>
        <Button text="5" onPress={() => this.buttonHandler("5")}/>
        <Button text="6" onPress={() => this.buttonHandler("6")}/>
        <Button text="x" style="operator" onPress={() => this.operatorHandler("x")}/>
      </View>
      <View style={styles.row}>
        <Button text="1" onPress={() => this.buttonHandler("1")}/>
        <Button text="2" onPress={() => this.buttonHandler("2")}/>
        <Button text="3" onPress={() => this.buttonHandler("3")}/>
        <Button text="-" style="operator" onPress={() => this.operatorHandler("-")}/>
      </View>
      <View style={styles.row}>
        <Button text="C" style="clear" onPress={() => this.resetState()}/>
        <Button text="0" onPress={() => this.buttonHandler("0")}/>
        <Button text="." onPress={() => this.buttonHandler(".")}/>
        <Button text="+" style="operator" onPress={() => this.operatorHandler("+")}/>
      </View>
      <View style={styles.row}>
        <Button text="=" style="equals" onPress={() => this.equalHandler("=")}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    style: "light",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  display: {
    flex: 2.5,
    flexDirection: "column-reverse",
  },
  displayText: {
    fontSize: 50,
    color: "#f0f0f0",
    padding: 20,
  },
});