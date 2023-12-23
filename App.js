import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View, Text, StatusBar } from "react-native";
import { Button } from "./components";

export default function App() {
  // State variables to manage the calculator's values and state
  const [previousValue, setPreviousValue] = useState("");
  const [currentValue, setCurrentValue] = useState("0");
  const [operator, setOperator] = useState("");
  const [equalsRepeated, setEqualsRepeated] = useState(false);
  const [previousInput, setPreviousInput] = useState("");

  // Handler for numeric and decimal point buttons
  const buttonHandler = (value) => {
    // Check if currentValue is not a number, if so, reset state
    if (isNaN(currentValue)) resetState();

    if (currentValue.length < 15)
    {
      // Check if value is "." and currentValue already contains a "."
      // Do nothing if "." is already present
      if (value === "." && currentValue.includes(".")) return;

      // If currentValue is empty, add a leading zero before the dot
      if ((currentValue === "" || currentValue === "0") && value === ".")
      {
        setCurrentValue("0.");
      }
      else
      {
        setCurrentValue(currentValue != "0" ? currentValue + value : value);
      }
    }
  }

  // Handler for the equal button
  const equalHandler = () => {
    if (currentValue !== "" && previousValue !== "")
    {
      firstVal = parseFloat(equalsRepeated ? currentValue : previousValue);
      secondVal = parseFloat(equalsRepeated ? previousValue : currentValue);
      
      // Perform calculation based on the operator
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
      
      // Update previousValue and previousInput based on equalsRepeated state boolean
      if (!equalsRepeated) setPreviousValue(currentValue);

      setPreviousInput(!equalsRepeated ? `${previousValue} ${operator} ${currentValue}` : `${currentValue} ${operator} ${previousValue}`);
      
      // Set equalsRepeated to true to switch around current and previous values for proper displaying and calculating
      setEqualsRepeated(true);
    }
  }
  
  // Handler for operator buttons
  const operatorHandler = (value) => {
    if (currentValue !== "")
    {
      if (operator !== "")
      {
        // If an operator is already set, perform the calculation
        equalHandler();
        setEqualsRepeated(false);
      }
        // Set the new operator, update previousValue, and reset currentValue
        setOperator(value);
        setPreviousValue(currentValue);
        setCurrentValue("");
    }
  }

  // Handler for the clear button
  const resetState = () => {
    // Reset all state variables
    setPreviousValue("");
    setCurrentValue("");
    setOperator("");
    setEqualsRepeated(false);
    setPreviousInput("");
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={"#121212"}/>
      <View style={styles.display}>
        <Text
          style={[styles.displayText,
            currentValue.length > 18 ? styles.xxSmallFont : 
            (currentValue.length > 15 ? styles.xSmallFont : 
            (currentValue.length > 12 ? styles.smallFont : 
            (currentValue.length > 8 ? styles.mediumFont : 
            styles.largeFont)))]}>
              {currentValue === "" ? previousValue : currentValue}
        </Text>
        <Text style={styles.bgDisplayText}>
          {equalsRepeated ? `${previousInput} =` : (currentValue !== "0" && operator !== "" ? `${previousValue} ${operator} ${currentValue}` : "")}
        </Text>
      </View>
      <View style={styles.row}>
        <Button text="7" onPress={() => buttonHandler("7")}/>
        <Button text="8" onPress={() => buttonHandler("8")}/>
        <Button text="9" onPress={() => buttonHandler("9")}/>
        <Button text="/" style="operator" disabled={isNaN(currentValue)} onPress={() => operatorHandler("/")}/>
      </View>
      <View style={styles.row}>
        <Button text="4" onPress={() => buttonHandler("4")}/>
        <Button text="5" onPress={() => buttonHandler("5")}/>
        <Button text="6" onPress={() => buttonHandler("6")}/>
        <Button text="x" style="operator" disabled={isNaN(currentValue)} onPress={() => operatorHandler("x")}/>
      </View>
      <View style={styles.row}>
        <Button text="1" onPress={() => buttonHandler("1")}/>
        <Button text="2" onPress={() => buttonHandler("2")}/>
        <Button text="3" onPress={() => buttonHandler("3")}/>
        <Button text="-" style="operator" disabled={isNaN(currentValue)} onPress={() => operatorHandler("-")}/>
      </View>
      <View style={styles.row}>
        <Button text="C" style="clear" onPress={() => resetState()}/>
        <Button text="0" onPress={() => buttonHandler("0")}/>
        <Button text="." onPress={() => buttonHandler(".")}/>
        <Button text="+" style="operator" disabled={isNaN(currentValue)} onPress={() => operatorHandler("+")}/>
      </View>
      <View style={styles.row}>
        <Button text="=" style="equals" disabled={isNaN(currentValue)} onPress={() => equalHandler("=")}/>
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
    paddingBottom: 20,
  },
  displayText: {
    textAlign: "center",
    color: "#f0f0f0",
    padding: 5,
  },
  bgDisplayText: {
    textAlign: "center",
    color: "#dcdcdc",
    fontSize: 20,
  },
  xxSmallFont: {
    fontSize: 25,
  },
  xSmallFont: {
    fontSize: 30,
  },
  smallFont: {
    fontSize: 34,
  },
  mediumFont: {
    fontSize: 42,
  },
  largeFont: {
    fontSize: 50,
  },
});