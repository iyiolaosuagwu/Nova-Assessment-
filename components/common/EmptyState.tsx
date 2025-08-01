import React from "react";
import { Text, View } from "react-native";
import { IconSymbol } from "../ui/IconSymbol";
import { emptyStateStyles } from "./styles";

interface EmptyStateProps {
    icon: any;
    iconSize?: number;
    iconColor?: string;
    title: string;
    subtitle?: string;
}

function EmptyState({
    icon,
    iconSize = 40,
    iconColor = "#EAECF0",
    title,
    subtitle,
}: EmptyStateProps) {
    return (
        <View style={emptyStateStyles.emptyContainer}>
            <IconSymbol name={icon} size={iconSize} color={iconColor} />
            <Text style={emptyStateStyles.emptyTitle}>{title}</Text>
            {subtitle && (
                <Text style={emptyStateStyles.emptySubtitle}>{subtitle}</Text>
            )}
        </View>
    );
}

export default EmptyState;
