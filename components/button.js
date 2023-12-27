import { StyleSheet, Dimensions, Pressable, Text } from "react-native";

const Button = ({text, style, onPress, disabled}) => {
    return (
        <Pressable
            style={({pressed}) => [styles.button,
                style === "operator" ? styles.operator :
                (style === "equals" ? styles.equals :
                (style === "clear" ? styles.clear :
                styles.number)),
                disabled ? styles.disabled : null,
                pressed ? styles.pressedStyle : null]}
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
        backgroundColor: "#101010",
        borderRadius: 4,
        margin: 1,
      },
    buttonText: {
        fontSize: 32,
    },
    pressedStyle: {
        backgroundColor: "#222222",
    },
    disabled: {
        borderColor: "rgba(120, 120, 120, 0.5)",
    },
    disabledText: {
        color: "rgba(120, 120, 120, 0.5)",
    },
    operator: {
        borderColor: "#007FBF",
    },
    operatorText: {
        color: "#007FBF",
    },
    equals: {
        borderColor: "#008A00",
    },
    equalsText: {
        color: "#008A00",
    },
    clear: {
        borderColor: "#9A0000",
    },
    clearText: {
        color: "#9A0000",
    },
    number: {
        borderWidth: 0,
        backgroundColor: "#181818",
    },
    numberText: {
        color: "#F0F0F0",
    },
})

export {Button};