import React from "react";
import { Text, View } from "react-native";
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
        {children}
    </View>
);

export default SectionHeader;
