import React from "react";
import {
    ActivityIndicator,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from "react-native";
import { buttonStyles } from "./styles";

export type ButtonVariant = "primary" | "secondary" | "outline" | "danger";

interface ButtonProps {
    onPress: () => void;
    children: React.ReactNode;
    variant?: ButtonVariant;
    style?: ViewStyle;
    textStyle?: TextStyle;
    disabled?: boolean;
    loading?: boolean;
}

const variantStyles = {
    primary: {
        button: {
            backgroundColor: "#005EE8",
            borderColor: "#005EE8",
        },
        text: {
            color: "white",
        },
    },
    secondary: {
        button: {
            backgroundColor: "#f0f0f0",
            borderColor: "#f0f0f0",
        },
        text: {
            color: "#005EE8",
        },
    },
    outline: {
        button: {
            backgroundColor: "white",
            borderColor: "#005EE8",
            borderWidth: 1,
        },
        text: {
            color: "#005EE8",
        },
    },
    danger: {
        button: {
            backgroundColor: "#ff4d4f",
            borderColor: "#ff4d4f",
        },
        text: {
            color: "white",
        },
    },
};

const Button: React.FC<ButtonProps> = ({
    onPress,
    children,
    variant = "primary",
    style,
    textStyle,
    disabled = false,
    loading = false,
}) => {
    const v = variantStyles[variant];
    return (
        <TouchableOpacity
            style={[
                buttonStyles.button,
                v.button,
                disabled && buttonStyles.disabled,
                style,
            ]}
            onPress={onPress}
            activeOpacity={0.7}
            disabled={disabled || loading}
        >
            {loading ? (
                <ActivityIndicator color={v.text.color} />
            ) : (
                <Text style={[buttonStyles.text, v.text, textStyle]}>
                    {children}
                </Text>
            )}
        </TouchableOpacity>
    );
};

export default Button;
