import { StyleSheet, Dimensions, Pressable, Text } from "react-native";

const Button = ({text, style, onPress}) => {
    return (
        <Pressable
            style={[styles.button, style === "operator" ? styles.operator : (style === "equals" ? styles.equals : (style === "clear" ? styles.clear : styles.number))]}
            onPress={onPress}>
            <Text style={[styles.buttonText, style === "operator" ? styles.operatorText : (style === "equals" ? styles.equalsText : (style === "clear" ? styles.clearText : styles.numberText))]}>
                {text}
            </Text>
        </Pressable>
    )
}

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
    button: {
        flex: 1,
        width: buttonWidth,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0.25,
        borderColor: "white",
        borderRadius: 8,
        margin: 2,
      },
    buttonText: {
        fontSize: 32,
    },
    operator: {
        borderColor: "#e69600",
    },
    operatorText: {
        color: "#e69600",
    },
    equals: {
        borderColor: "#00aa00",
    },
    equalsText: {
        color: "#00aa00",
    },
    clear: {
        borderColor: "#aa0000",
    },
    clearText: {
        color: "#aa0000",
    },
    number: {
        borderColor: "#f0f0f0",
    },
    numberText: {
        color: "#f0f0f0",
    },
})

export {Button};