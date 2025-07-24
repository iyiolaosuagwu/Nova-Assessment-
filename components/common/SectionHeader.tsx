import React from "react";
import { Text, View } from "react-native";
import { sectionHeaderStyles } from "./styles";

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
    <View style={sectionHeaderStyles.sectionHeader}>
        <Text style={sectionHeaderStyles.sectionTitle}>{title}</Text>
        {children}
    </View>
);

export default SectionHeader;
