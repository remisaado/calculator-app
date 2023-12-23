import { StyleSheet, Dimensions, Pressable, Text } from "react-native";

const Button = ({text, style, onPress, disabled}) => {
    return (
        <Pressable
            style={[styles.button,
                style === "operator" ? styles.operator :
                (style === "equals" ? styles.equals :
                (style === "clear" ? styles.clear :
                styles.number)),
                disabled ? styles.disabled : null]}
            disabled={disabled}
            onPress={onPress}>
            <Text style={[styles.buttonText,
                style === "operator" ? styles.operatorText :
                (style === "equals" ? styles.equalsText :
                (style === "clear" ? styles.clearText :
                styles.numberText)),
                disabled ? styles.disabledText : null]}>
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
        borderRadius: 4,
        margin: 2,
      },
    buttonText: {
        fontSize: 32,
    },
    disabled: {
        borderColor: "rgba(120, 120, 120, 0.5)",
    },
    disabledText: {
        color: "rgba(120, 120, 120, 0.5)",
    },
    operator: {
        borderColor: "#00afff",
    },
    operatorText: {
        color: "#00afff",
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