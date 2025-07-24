import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { IconSymbol } from "../ui/IconSymbol";
import { quickLinkButtonStyles } from "./styles";

interface QuickLinkButtonProps {
    icon: any;
    iconColor?: string;
    label: string;
    onPress: () => void;
}

const QuickLinkButton: React.FC<QuickLinkButtonProps> = ({
    icon,
    iconColor = "white",
    label,
    onPress,
}) => (
    <TouchableOpacity
        style={quickLinkButtonStyles.quickLinkButton}
        onPress={onPress}
    >
        <View style={quickLinkButtonStyles.quickLinkIcon}>
            <IconSymbol name={icon} size={24} color={iconColor} />
        </View>
        <Text style={quickLinkButtonStyles.quickLinkText}>{label}</Text>
    </TouchableOpacity>
);

export default QuickLinkButton;
