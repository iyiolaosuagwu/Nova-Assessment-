import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { IconSymbol } from "../ui/IconSymbol";
import { cardStyles } from "./styles";

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
    <TouchableOpacity style={cardStyles.quickLinkButton} onPress={onPress}>
        <View style={cardStyles.quickLinkIcon}>
            <IconSymbol name={icon} size={24} color={iconColor} />
        </View>
        <Text style={cardStyles.quickLinkText}>{label}</Text>
    </TouchableOpacity>
);

export default QuickLinkButton;
