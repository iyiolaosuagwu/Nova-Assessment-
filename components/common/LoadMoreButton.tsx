import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { commonStyles } from "./styles";

interface LoadMoreButtonProps {
    label: string;
    onPress: () => void;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ label, onPress }) => (
    <TouchableOpacity style={commonStyles.loadMoreButton} onPress={onPress}>
        <Text style={commonStyles.loadMoreText}>{label}</Text>
    </TouchableOpacity>
);

export default LoadMoreButton;
