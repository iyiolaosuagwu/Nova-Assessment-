import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { loadMoreButtonStyles } from "./styles";

interface LoadMoreButtonProps {
    label: string;
    onPress: () => void;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ label, onPress }) => (
    <TouchableOpacity
        style={loadMoreButtonStyles.loadMoreButton}
        onPress={onPress}
    >
        <Text style={loadMoreButtonStyles.loadMoreText}>{label}</Text>
    </TouchableOpacity>
);

export default LoadMoreButton;
