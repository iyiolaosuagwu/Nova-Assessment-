import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { commonStyles } from "./styles";

interface SectionHeaderProps {
    title: string;
    actionLabel?: string;
    onActionPress?: () => void;
    children?: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    actionLabel,
    onActionPress,
    children,
}) => (
    <View style={commonStyles.sectionHeader}>
        <Text style={commonStyles.sectionTitle}>{title}</Text>
        {actionLabel && onActionPress && (
            <TouchableOpacity
                style={commonStyles.actionButton}
                onPress={onActionPress}
            >
                {children}
                <Text style={commonStyles.actionButtonText}>{actionLabel}</Text>
            </TouchableOpacity>
        )}
    </View>
);

export default SectionHeader;
