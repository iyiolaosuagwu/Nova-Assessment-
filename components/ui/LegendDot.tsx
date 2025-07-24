import React from "react";
import { StyleSheet, View } from "react-native";

interface LegendDotProps {
    color: string;
}

const LegendDot: React.FC<LegendDotProps> = ({ color }) => (
    <View style={[styles.legendDot, { backgroundColor: color }]} />
);

const styles = StyleSheet.create({
    legendDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        marginRight: 8,
    },
});

export default LegendDot;
